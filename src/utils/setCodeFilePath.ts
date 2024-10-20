import * as os from "os";

export class setCodeFilePath{
    quizId: number;
    target_language:string;
    codeFilePath: string;


    constructor(quizId:number, target_language:string){
        this.quizId = quizId;
        this.target_language = target_language;
        this.codeFilePath = process.cwd()+"/target_code/"+this.target_language+"/"+quizId;   
    }

}