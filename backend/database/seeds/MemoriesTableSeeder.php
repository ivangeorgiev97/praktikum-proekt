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
                'title'       => 'First title',
                'description' => 'Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1 Description 1'
            ],
            [
                'title'       => 'Second title',
                'description' => 'Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2 Description 2'
            ],
            [
                'title'       => 'Again another title',
                'description' => 'Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3 Description 3'            
            ],
            [
                'title'       => 'Fourth title',
                'description' => 'Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4'            
            ]
        ];

        // TODO - Update this to updateOrCreate
        foreach ($memories as $memory) {
            MemoryModel::create($memory);
        }
    }
}
