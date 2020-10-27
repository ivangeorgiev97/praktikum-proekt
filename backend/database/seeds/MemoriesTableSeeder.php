<?php

use Illuminate\Database\Seeder;
use App\Memory as MemoryModel;

class MemoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $memories = [
            [
                'title'       => 'Title 1',
                'description' => 'Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1'
            ],
            [
                'title'       => 'Title 2',
                'description' => 'Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2'
            ],
            [
                'title'       => 'Title 2',
                'description' => 'Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3'            
            ]
        ];

        // TODO - Update this to updateOrCreate
        foreach ($memories as $memory) {
            MemoryModel::create($memory);
        }
    }
}
