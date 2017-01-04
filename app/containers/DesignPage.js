import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'

import Design from '../components/Design';
import * as DesignActions from '../actions/design';




function mapStateToProps(state) {
  return {
    color_set: state.color_set
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DesignActions, dispatch)
}

// export default connect(mapStateToProps)(Design)
export default connect(mapStateToProps, mapDispatchToProps)(Design)




// export default DesginPage

//////////////////////////////////////////////
//////////////////////////////////////////////

// import React, { Component } from 'react'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import Design from '../components/Design'
// import * as DesignActions from '../actions/design';
// // console.log('DesignActions\n',DesignActions)

// class DesignPage extends Component {

// 	// const propTypes = {
// 	// 	routes : PropTypes.object.isRequired,
// 	//     store  : PropTypes.object.isRequired
// 	// }

	
// 	render(){
        
//         const { dispatch } = this.props
        
//         console.log('CONTAINER\nprops = ',this.props)
        
//         const actions = bindActionCreators(DesignActions, dispatch)
        
//         return(
//         	<Design actions={actions} />
//         )
// 	}
// }

// export default connect( (state) => ({

// 	color_set: state.color_set

// }))(DesignPage)
























