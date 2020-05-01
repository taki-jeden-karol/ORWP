<?php

use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
           'name' => 'Sony 1.8 16mm C Mount',
            'description' => 'Good external condition, signs of usage are as seen in the photos, focus ring turning is smooth, minimal dust or particle inclusion, aperture works',
            'photo' => 'https://i.ebayimg.com/images/g/548AAOSwaXNen3X8/s-l1600.jpg',
            'price' => 3258.00
        ]);
        DB::table('products')->insert([
           'name' => 'Sony MDR-XB950N1',
            'description' => 'Extra Bass, Geschlossene Rückseite, Verstellbare Bügel, Faltbar, Leder-Ohrpolster, Lautstärkeregelung, Integrierter Ein/Aus-Schalter, Mikrofon, Abnehmbares Kabel, Akku, Rauschunterdrückung, Stereo',
            'photo' => 'https://i.ebayimg.com/images/g/lpUAAOSwmaBeqnv0/s-l1600.jpg',
            'price' => 1018.00
        ]);
        DB::table('products')->insert([
           'name' => 'PACK SONY Xperia',
            'description' => 'Brand new, unused, unopened, undamaged item in its original packaging',
            'photo' => 'https://i.ebayimg.com/images/g/9iAAAOSw5h9eqsna/s-l1600.jpg',
            'price' => 1458.00
        ]);
        DB::table('products')->insert([
           'name' => 'Sony Alpha A230 (body only)',
            'description' => 'In full working order and good condition',
            'photo' => 'https://i.ebayimg.com/images/g/L6kAAOSwxgNb3vCx/s-l1600.jpg',
            'price' => 6027.00
        ]);
        DB::table('products')->insert([
           'name' => '2 x Pro Grips™ Thumb Stick Covers Grip Caps For Sony PS4 Playstation Controller',
            'description' => 'Re-gain full control of your gaming experience with Pro Grips™ thumb stick covers',
            'photo' => 'https://i.ebayimg.com/images/g/bN4AAOSw0c9bnABA/s-l1600.jpg',
            'price' => 223.00
        ]);
        DB::table('products')->insert([
           'name' => 'MAGIX SONY VEGAS Pro 17.0 - LIFETIME - 100% SECURE - Windows - 64-Bit - Pro',
            'description' => 'NO CD, DVD, OR ANY TYPE OF MEDIA WILL BE POST ',
            'photo' => 'https://i.ebayimg.com/images/g/zCkAAOSwr6deeI9C/s-l1600.jpg',
            'price' => 365.00
        ]);
    }
}
