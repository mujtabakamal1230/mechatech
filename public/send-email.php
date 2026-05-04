<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get JSON input
    $inputJSON = file_get_contents('php://input');
    $input = json_decode($inputJSON, true);

    if (!$input) {
        http_response_code(400);
        echo json_encode(["success" => false, "error" => "Invalid request body"]);
        exit;
    }

    // --- CONFIGURATION ---
    // IMPORTANT: Replace this with your actual Resend API Key
    $apiKey = 're_cXk3RNJt_ULM82N3GboZf4Ca6uapM5FqJ'; 
    $toEmail = 'hello@mecha-tech.net';
    // ---------------------

    $firstName = htmlspecialchars($input['firstName'] ?? '');
    $lastName = htmlspecialchars($input['lastName'] ?? '');
    $email = htmlspecialchars($input['email'] ?? '');
    $phone = htmlspecialchars($input['phone'] ?? '');
    $message = htmlspecialchars($input['message'] ?? '');

    $subject = "New Contact Form Submission from $firstName $lastName";
    
    $html = "
        <div style=\"font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;\">
          <h2 style=\"color: #239AA1; border-bottom: 2px solid #239AA1; padding-bottom: 10px;\">New Contact Submission</h2>
          <div style=\"margin: 20px 0;\">
            <p><strong>Name:</strong> $firstName $lastName</p>
            <p><strong>Email:</strong> <a href=\"mailto:$email\">$email</a></p>
            <p><strong>Phone:</strong> " . ($phone ?: "Not provided") . "</p>
          </div>
          <div style=\"background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;\">
            <p><strong>Message:</strong></p>
            <p style=\"white-space: pre-wrap;\">$message</p>
          </div>
          <hr style=\"border: 0; border-top: 1px solid #eee; margin: 30px 0;\" />
          <p style=\"font-size: 12px; color: #999;\">This email was sent from the Mechatech contact form via PHP bridge.</p>
        </div>
    ";

    $data = [
        "from" => "Mechatech Contact <onboarding@resend.dev>",
        "to" => [$toEmail],
        "reply_to" => $email,
        "subject" => $subject,
        "html" => $html
    ];

    $ch = curl_init('https://api.resend.com/emails');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json'
    ]);

    $response = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);

    if ($curlError) {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => "CURL Error: " . $curlError]);
    } else if ($httpCode >= 200 && $httpCode < 300) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code($httpCode);
        echo $response;
    }
    exit;
}
