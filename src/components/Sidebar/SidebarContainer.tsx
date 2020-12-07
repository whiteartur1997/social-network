import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { SidebarFriendType } from '../../redux/store';
import Sidebar from './Sidebar';

type MapStateToPropsType = {
  sidebarFriends: SidebarFriendType[]
}

type MapDispatchToPropsType = {

}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
  return {
    sidebarFriends: state.sidebar.friends
  }
}

function mapDispatchToProps(dispatch: Dispatch): MapDispatchToPropsType {
  return {

  }
}

const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar);

export default SidebarContainer;