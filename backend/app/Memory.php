<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Memory extends Model 
{
    protected $fillable = [
        'title', 'description'
    ];

    protected $hidden = [];
}
