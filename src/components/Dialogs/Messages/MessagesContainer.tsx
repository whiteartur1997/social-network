import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { sendMessageAC, updateNewMessageTextAC } from '../../../redux/dialogsReducer';
import { AppStateType } from '../../../redux/redux-store';
import { MessageItemType } from '../../../redux/store';
import Messages from './Messages';

type MapStateToPropsType = {
  messages: MessageItemType[]
  newMessageText: string
}

type MapDispatchToPropsType = {
  updateNewMessageText: (newText: string) => void
  sendMessage: () => void
}

// спросить про Типизацию
const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
  return {
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText
  }
}

// как типизировать dispatch?
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    updateNewMessageText: (newText: string) => {
      dispatch(updateNewMessageTextAC(newText))
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;