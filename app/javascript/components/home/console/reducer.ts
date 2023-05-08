interface ConsoleState {
    submittedInput: string;
    currentValue: string;
    logs: {}
}

export const initialConsoleState: ConsoleState = {
    submittedInput: '',
    currentValue: '',
    logs: {}
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
    export class updateValue implements ConsoleAction {
        e: React.ChangeEvent<HTMLInputElement>
        readonly updateState: ConsoleStateUpdate = (prevState) => {
            return { ...prevState, currentValue: this.e.target.value }
        }

        constructor(e: React.ChangeEvent<HTMLInputElement>) {
            this.e = e
        }
    }

    export class submitInput implements ConsoleAction {
        readonly updateState: ConsoleStateUpdate = (prevState) => {
            let newLogs = prevState.logs
            if (Object.keys(newLogs).length === 0) {
                newLogs['1'] = prevState.currentValue
            }
            else {
                const sortedKeys = Object.keys(newLogs).sort((a: string, b: string) => {
                    return +(a) - +(b)
                })
                const lastLogsIndex = sortedKeys.at(-1)
                newLogs[`${+(lastLogsIndex) + 1}`] = prevState.currentValue
            }
            return { ...prevState, submittedInput: prevState.currentValue, logs: newLogs }
        }
    }
}