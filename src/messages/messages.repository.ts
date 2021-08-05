const {writeFile, readFile} = require('fs').promises
import {Injectable} from '@nestjs/common'

@Injectable()
export class MessagesRepositoty {

    async findAll(){
        const contents = await readFile('messages.json', 'utf8')
        const messages = JSON.parse(contents)
        return messages
    }

    async findOne(id: string){
        const contents = await readFile('messages.json','utf8')
        const messages = JSON.parse(contents)

        return messages[id]
    }

    async create(content: string){
        const contents = await readFile('messages.json','utf8')
        const messages = JSON.parse(contents)
        const id = Math.floor(Math.random()*999)

        messages[id]={  
                content,
                id
        }
        await writeFile('messages.json',JSON.stringify(messages))
        return id;
    }
}