import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {
  title: string = 'Top 5 Singers';
   singers:singer[]=[
    {singerName:'Lata Mangeshkar',totalSongs:5328,hitSong:'Aye Mete Watan',movieName:'border',releaseYear:1997},
    {singerName:'arijit singh',totalSongs:200,hitSong:'Desh Mere',movieName:'Bhuj',releaseYear:2021},
    {singerName:'Sonu Nigam',totalSongs: 500,hitSong:'Abhi Muzame ',movieName:'Aganeepath',releaseYear:2012},
    {singerName:'Shreya Ghoshal',totalSongs:99,hitSong:'Chandra',movieName:'Chandramukhi',releaseYear:2022},
    {singerName:'Neha Kakkar',totalSongs:85,hitSong:'Mile Ho Tum',movieName:'Album',releaseYear:2015},
    {singerName:'Udit Narayan',totalSongs:91,hitSong:'Main Yahaan',movieName:'Veer-Zaara',releaseYear:2004}
   ]
    
  constructor() { }

  ngOnInit() {
  }

}
class singer{
  singerName:string;
  totalSongs:number;
  hitSong:string;
  movieName:String;
  releaseYear:number;
}
