import { connect } from 'react-redux';
import { DialogsPageType, sendMessage, updateNewMessageText } from '../../redux/dialogsReducer';
import { AppStateType } from '../../redux/redux-store';
import { withAuthRedirect } from '../HOC/AuthRedirect';
import Dialogs from './Dialogs';

type MapStateToPropsType = {
  dialogsPage: DialogsPageType
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    // диалоги будут перерисовываться, если этот объект будет иным
    dialogsPage: state.dialogsPage
  }
}

const DialogsContainer = connect(mapStateToProps, { sendMessage, updateNewMessageText })(AuthRedirectComponent)

export default DialogsContainer;