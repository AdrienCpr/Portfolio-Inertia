@component('mail::message')
    # Nouveau Message de Contact

    **Nom:** {{ $name }}
    **E-mail:** {{ $email }}
    **Sujet:** {{ $subject }}

    ---

    {{ $message }}

    ---

    Merci,
    Votre équipe

@endcomponent
