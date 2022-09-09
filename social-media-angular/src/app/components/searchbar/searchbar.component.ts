import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service'; 
import { Observable } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit {

  
  constructor(private usersService: UsersService) {
    
  }
  usernameList: String[];
  ngOnInit(): void {
    this.refreshSearch();
    this.usersService.getAllUserNames().subscribe(
      (response) => {
        this.usernameList=response;
      }
    )
  }

  ngDestroy(): void{
    clearInterval(this.intervalId);
  }

  intervalId=0;
  usernames: String[]=[];
  selectedNames: String[]=[];
  oldSearch: String | undefined;
  page: number=0;
  pageAmount: number=6;
  disabled1: boolean=true;
  disabled2: boolean=true;
  private refreshSearch(){
    this.intervalId = window.setInterval(()=>{
      let search: String | undefined=(document.getElementById("searchPostBar") as HTMLInputElement).value;
      if (search!=this.oldSearch){
        this.usernames=[];
        this.selectedNames=[];
        this.usernames=this.search(search);
        this.select(0, this.pageAmount);
        this.oldSearch=search;
      }
    }, 1000);
  }

  /**This is the end point for search bar.
  * Determines it by characters and follows their order.*/
  search(search: String | undefined): String[]{
    this.page=0;
    //This checks if it is empty.
    //TODO make sure this works.
    if (search==undefined || search==""){
      return [];
    }

    let results: String[]=[];
    let index: number=0;

    //This loops through all the usernames.
    for(let x=0;x<this.usernameList.length;x++){
      let username=this.usernameList[x];
      let y, w: number;

      //Loop through all the characters in the search.
      charMatch:
      for(y=0, w=0;y<search.length;y++){
        
        //Loop through all the characters in the username.
    		//This is to keep track of the order as to make it so characters before are not counted.
        while(w<username.length){
          if (search.charAt(y)==username.charAt(w)) {
            continue charMatch;
          }
          w++;
        }
        break;
      }

      //If the username did not hit the end before the characters to search hit the end this is ran.
      if (w<username.length) {
        results[index]=username;
        index++;
      }
    }
    return results;
  }

  pageButtonEvent(increase: number){
    this.page+=increase;
    this.select(this.page, this.pageAmount);
  }

  select(page: number, pageAmount: number){
    this.disabled1=(page==0);
    
    let start: number=page*pageAmount;
    let limit: number=(page+1)*pageAmount;
    
    if (limit>this.usernames.length){
      this.disabled2=true;
      limit=this.usernames.length;
    }else{
      this.disabled2=false;
    }
    
    for(let x=start;x<limit;x++){
      this.selectedNames[x-start]=this.usernames[x];
    }
  }
  
}

