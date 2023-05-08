import twitter from '../../../../assets/images/twitter.svg'
import li from '../../../../assets/images/linkedin.svg'
import gh from '../../../../assets/images/github.svg'

interface ConsoleState {
    submittedInput: string | undefined;
    currentValue: string;
    logs: {},
    loading: boolean
}

export const initialConsoleState: ConsoleState = {
    submittedInput: undefined,
    currentValue: '',
    logs: {},
    loading: false
}

type ConsoleStateUpdate = (prevState: ConsoleState) => ConsoleState


export const consoleReducer = (
    prevState: ConsoleState,
    action: ConsoleAction,
) => action.updateState(prevState)

interface ConsoleAction {
    updateState: ConsoleStateUpdate
}

export namespace Action {
    export class UpdateValue implements ConsoleAction {
        e: React.ChangeEvent<HTMLInputElement>
        readonly updateState: ConsoleStateUpdate = (prevState) => {
            return { ...prevState, currentValue: this.e.target.value }
        }

        constructor(e: React.ChangeEvent<HTMLInputElement>) {
            this.e = e
        }
    }

    export class SubmitInput implements ConsoleAction {
        readonly updateState: ConsoleStateUpdate = (prevState) => {
            let newLogs = prevState.logs
            let lastLogsIndex: string

            // update logs with user input
            if (Object.keys(newLogs).length === 0) {
                lastLogsIndex = '0'
                newLogs['1'] = `> ${prevState.currentValue}`
            }
            else {
                const sortedKeys = Object.keys(newLogs).sort((a: string, b: string) => {
                    return +(a) - +(b)
                })
                lastLogsIndex = sortedKeys.at(-1)
                newLogs[`${+(lastLogsIndex) + 1}`] = `> ${prevState.currentValue}`

            }

            // sets loading to true. resolved by Action.ResponseToInput
            return { loading: true, currentValue: '', submittedInput: prevState.currentValue, logs: newLogs }
        }
    }

    export class ResponseToInput implements ConsoleAction {
        input: string
        readonly updateState: ConsoleStateUpdate = (prevState) => {
            // this action should always set loading: false
            if (this.input === "clear" || Object.keys(prevState.logs).length === 0) {
                return { ...prevState, logs: {}, loading: false, submittedInput: undefined }
            }
            let newLogs = prevState.logs
            let lastLogsIndex: string

            const sortedKeys = Object.keys(newLogs).sort((a: string, b: string) => {
                return +(a) - +(b)
            })
            lastLogsIndex = sortedKeys.at(-1)
            newLogs[`${+(lastLogsIndex) + 1}`] = handleInput(this.input)

            return { ...prevState, logs: newLogs, loading: false, submittedInput: undefined }
        }
        constructor(input: string) {
            this.input = input
        }
    }
}

const handleInput = (input: string): string => {
    switch (input) {
        case 'help':
            return `
                <p>Options:</p>
                <br/>
                <div class='pl-2 grid grid-cols-5'>
                    <p>- clear</p> <p>clear the terminal</p>
                </div>
                <div class='pl-2 grid grid-cols-5'>
                    <p>- socials</p> <p>list my socials</p>
                </div>
            `
        case 'socials':
            return `
                <div class='grid grid-cols-3 py-2'>
                    <a href='https://twitter.com/parkerhodgedev' target="_blank" class='flex flex-col items-center'>
                        <img src='${twitter}' class='h-6 w-auto'/>
                        <p>twitter</p>
                    </a>
                    <a href='https://linkedin.com/in/parkerhodgedev' target="_blank" class='flex flex-col items-center'>
                        <img src='${li}' class='h-6 w-auto'/>
                        <p>linkedin</p>
                    </a>
                    <a href='https://github.com/iparkerhodge' target="_blank" class='flex flex-col items-center'>
                        <img src='${gh}' class='h-6 w-auto'/>
                        <p>github</p>
                    </a>
                </div>
            `
        default:
            return `<p>Unrecognized command. Type 'help' to see a list of commands.</p>`
    }
}