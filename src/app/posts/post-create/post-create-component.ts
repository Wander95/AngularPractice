import { Component,OnInit,EventEmitter, Output } from '@angular/core'
import { Post } from '../post.model'
import { NgForm } from '@angular/forms';

@Component({
    selector:'app-post-create',
    templateUrl:'./post-create-component.html',
    styleUrls: ['./post-create-Component.css']
})

export class PostCreateComponent {
    entered_title:String;
    entered_content:String;
    @Output() postCreated = new EventEmitter<Post>();

    onAddPost(form:NgForm){
        console.log(form);
        if(form.invalid){return}else{
            const post: Post = {
                title: this.entered_title,
                content: this.entered_title
            }
            this.postCreated.emit(post);
        }
    }
    onChangePost(){
        console.log("")
    }
}