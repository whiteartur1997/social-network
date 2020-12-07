import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { DialogItemType } from '../../redux/store';
import Dialogs from './Dialogs';

type MapStateToPropsType = {
  dialogs: DialogItemType[]
}

type MapDispatchToPropsType = {

}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    dialogs: state.dialogsPage.dialogs
  }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
  return {

  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;