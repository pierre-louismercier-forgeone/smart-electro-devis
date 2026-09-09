<?php
/**
 * Smart Electro — Réception des devis "Estimateur domotique KNX"
 * À coller dans le plugin "Snippets" (Code Snippets) :
 *   Nouveau snippet → type "PHP" (Functions) → "Run everywhere" → Enregistrer & Activer.
 *
 * Enregistre une route REST PUBLIQUE (pas d'authentification) qui reçoit le
 * formulaire de l'estimateur et envoie le devis par email via wp_mail()
 * (donc via ton WP Mail SMTP → depuis ton domaine).
 *
 * Endpoint appelé par le site :
 *   https://www.smart-electro.fr/?rest_route=/se/v1/lead   (POST, JSON)
 */

// >>> Adresse qui reçoit les demandes de devis (modifie si besoin) :
if ( ! defined( 'SE_DEVIS_DEST' ) ) {
	define( 'SE_DEVIS_DEST', 'contact@smart-electro.fr' );
}

add_action( 'rest_api_init', function () {
	register_rest_route(
		'se/v1',
		'/lead',
		array(
			'methods'             => 'POST',
			'permission_callback' => '__return_true', // route publique
			'callback'            => 'se_handle_lead',
		)
	);
} );

function se_handle_lead( WP_REST_Request $request ) {

	$p = $request->get_params(); // fusionne le corps JSON + query

	$prenom = sanitize_text_field( $p['prenom'] ?? '' );
	$nom    = sanitize_text_field( $p['nom'] ?? '' );
	$email  = sanitize_email( $p['email'] ?? '' );
	$tel    = sanitize_text_field( $p['tel'] ?? '' );
	$cp     = sanitize_text_field( $p['cp'] ?? '' );
	$projet = sanitize_text_field( $p['projet'] ?? '' );
	$bmin   = sanitize_text_field( $p['budget_min'] ?? '' );
	$bmax   = sanitize_text_field( $p['budget_max'] ?? '' );
	$postes = sanitize_textarea_field( $p['postes'] ?? '' );
	$msg    = sanitize_textarea_field( $p['msg'] ?? '' );

	if ( ! is_email( $email ) || $prenom === '' ) {
		return new WP_Error( 'se_missing', 'Champs obligatoires manquants.', array( 'status' => 422 ) );
	}

	$subject = 'Nouveau devis domotique KNX — ' . trim( $prenom . ' ' . $nom );

	$body  = "Nouvelle demande de devis (estimateur KNX)\n";
	$body .= "-------------------------------------------\n\n";
	$body .= "Nom          : " . trim( $prenom . ' ' . $nom ) . "\n";
	$body .= "Email        : " . $email . "\n";
	$body .= "Téléphone    : " . $tel . "\n";
	$body .= "Commune / CP : " . $cp . "\n\n";
	$body .= "Type de projet   : " . $projet . "\n";
	$body .= "Budget estimé    : " . $bmin . " € – " . $bmax . " €\n";
	$body .= "Postes à piloter : " . $postes . "\n\n";
	$body .= "Message :\n" . ( $msg !== '' ? $msg : '(aucun)' ) . "\n";

	$headers = array( 'Content-Type: text/plain; charset=UTF-8' );
	$headers[] = 'Reply-To: ' . trim( $prenom . ' ' . $nom ) . ' <' . $email . '>';

	$sent = wp_mail( SE_DEVIS_DEST, $subject, $body, $headers );

	if ( $sent ) {
		return array( 'ok' => true );
	}
	return new WP_Error( 'se_mail_failed', "L'envoi de l'email a échoué (vérifier WP Mail SMTP).", array( 'status' => 500 ) );
}
