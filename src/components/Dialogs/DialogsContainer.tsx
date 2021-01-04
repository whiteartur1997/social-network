import { connect } from 'react-redux';
import { DialogsPageType, sendMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';
import Dialogs from './Dialogs';

type MapStateToPropsType = {
  dialogsPage: DialogsPageType
  isAuth: boolean
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    // диалоги будут перерисовываться, если этот объект будет иным
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
  }
}

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessageText })(Dialogs)

export default DialogsContainer;