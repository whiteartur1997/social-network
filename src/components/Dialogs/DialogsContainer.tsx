import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {updateNewMessageTextAC, sendMessageAC, DialogsPageType} from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';
import Dialogs from './Dialogs';

type MapStateToPropsType = {
  dialogsPage: DialogsPageType 
}

type MapDispatchToPropsType = {
  updateNewMessageText: (newText: string) => void
  sendMessage: () => void
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    // диалоги будут перерисовываться, если этот объект будет иным
    dialogsPage: state.dialogsPage
  }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
  return {
    updateNewMessageText: (newText: string) => {
      dispatch(updateNewMessageTextAC(newText))
    },
    sendMessage: () => {
      dispatch(sendMessageAC())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;