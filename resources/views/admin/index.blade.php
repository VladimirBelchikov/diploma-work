@extends('layout.admin')

<main class="main container">
    <div class="d-flex mt-2 mb-4" style="gap: 20px;">
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="{{ route('admin') }}">
                    Все заявки
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('application.callback') }}">Обратный звонок</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('application.mk') }}">Мастер класс</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('application.photo') }}">Фотосессия</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="{{ route('application.couch') }}">Репетитор</a>
            </li>
        </ul>
    </div>
    <table class="table table-bordered table-light caption-top">
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
                <td>{!! $item->note !!}</td>
                <td>{{ config('order.type.' . $item->type) }}</td>
            </tr>
        @endforeach
        </tbody>
    </table>
</main>
