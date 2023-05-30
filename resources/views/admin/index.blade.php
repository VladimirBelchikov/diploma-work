@extends('layout.admin')

<main class="main container">
    <div class="d-flex mt-2 mb-4" style="gap: 20px;">
        <button class="button">Неразобранное</button>
        <button class="button">МК</button>
        <button class="button">Репетитор</button>
    </div>
    <table class="table table-bordered caption-top">
        <caption>Список заявок</caption>
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Имя</th>
            <th scope="col">Номер телефона</th>
            <th scope="col">Записка</th>
            <th scope="col">Тип заявки</th>
        </tr>
        </thead>
        <tbody>
        @foreach($list as $item)
            <tr>
                <th scope="row">{{ $item->id }}</th>
                <td>{{ $item->name }}</td>
                <td>{{ $item->phone }}</td>
                <td>{{ $item->note }}</td>
                <td>{{ $item->type }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</main>
