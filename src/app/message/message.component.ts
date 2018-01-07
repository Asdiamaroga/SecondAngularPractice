import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messages :string[] = []

  constructor(private messageService :MessageService) { }

  ngOnInit() {
    this.messageService.messages.subscribe(res => {
        this.messages.push(res)
        this.messages.splice(0, this.messages.length - 4)
      }
    )
  }

}
