@extends('layout.admin')

<main class="main container">
    <table class="table table-bordered caption-top">
        <caption>Список заявок</caption>
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Номер телефона</th>
            <th scope="col">Записка</th>
        </tr>
        </thead>
        <tbody>
        @foreach($list as $item)
            <tr>
                <th scope="row">{{ $item->id }}</th>
                <td>{{ $item->name }}</td>
                <td>{{ $item->phone }}</td>
                <td>{{ $item->note }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</main>
