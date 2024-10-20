import { exec as childProcessExec } from 'child_process'
import * as CONSTS from "../common/constantsInDCA"

export default async function execShell(command_to_execute: string, command_name: string): Promise<string> {
    console.log(`${command_name} 명령 실행 시작`);

    const promiseExec = async (command_to_execute: string): Promise<string> => {
        return new Promise((resolve, reject) => {
            childProcessExec(command_to_execute, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    reject(error);
                }
                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    reject(stderr);
                }
                else {
                    resolve(stdout);
                }
            })
        })
    }

    try {
        let execStudCodeOutput: string = await promiseExec(command_to_execute);
        console.log(`${command_name} 명령 실행 종료`);
        return execStudCodeOutput;
    } catch (error) {
        console.log(`${command_name} 명령 실패 - 에러 발생`);
        console.log(error);
        return CONSTS.DCA_MESSAGE.EXECUTION_FAIL;
    }

}