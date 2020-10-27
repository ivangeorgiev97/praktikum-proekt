<?php

namespace App\Http\Controllers;

use App\Memory as MemoryModel;
use Illuminate\Http\Request;

class MemoryController extends Controller
{
    public function getAll()
    {
        return response()->json(MemoryModel::all());
    }

    public function getAllSortedByDate()
    {
        return response()->json(MemoryModel::select('*')->orderBy('created_at', 'desc')->get());
    }

    public function getById($id)
    {
        return response()->json(MemoryModel::find($id));
    }

    public function create(Request $request)
    {
        $memory = MemoryModel::create($request->all());

        return response()->json($memory, 201);
    }

    public function update($id, Request $request)
    {
        $memory = MemoryModel::findOrFail($id);
        $memory->update($request->all());

        return response()->json($memory, 200);
    }

    public function delete($id)
    {
        MemoryModel::findOrFail($id)->delete();
        
        return response('Memory was deleted successfuly', 200);
    }

}

