<!DOCTYPE html>
<html lang="ru">
<head>
    <title>Art Studio</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    @vite(['resources/scss/app.scss', 'resources/js/app.js'])
    <link rel="preload" href="{{ asset('assets/fonts/Montserrat-Bold.ttf') }}" as="font" type="font/ttf" crossorigin>
    <link rel="preload" href="{{ asset('assets/fonts/Montserrat-Regular.ttf') }}" as="font" type="font/ttf" crossorigin>
</head>
<body>
@include('components.header.header')

<main class="main">
    @yield('main')
</main>

@include('components.modals.callback')
@include('components.modals.preview')

</body>
</html>
