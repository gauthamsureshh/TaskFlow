<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    //fn to display all the tasks in the todo db
    public function index()
    {
        return Todo::all();
    }

    //fn to create new task and store them to db
    public function store(Request $request)
    {
        $request->validate([
            'text'=>'required',
            'day'=>'required'
        ]);
        return Todo::create($request->all());
    }

    //update the db details on hte basis of id
    public function update(Request $request, $id)
    {
        $task=Todo::find($id);
        $task->update($request->all());
        return $task;
    }

    //fn to delete a task from the db
    public function destroy($id)
    {
        Todo::destroy($id);
    }
}
