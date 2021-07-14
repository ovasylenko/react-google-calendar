import { Modal, Button } from 'antd'
import React, { useState } from 'react'
import AddEvent from './AddEvent'

function AddEventModal(props) {
  const [title, setTitle] = useState('')

  // const getDerivedStateFromProps = (nextProps) => {
  //   if (nextProps.eventTitle) {
  //     return setTitle(nextProps.eventTitle)
  //   } else {
  //     return setTitle('')
  //   }
  // }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleOk = () => {
    props.onOk(title)
  }

  // const { title } = this.state
  return (
    <Modal
      visible={props.visible}
      onOk={handleOk}
      onCancel={props.onClose}
      footer={[
        <Button key='back' onClick={props.onCancel}>
          {props.editMode ? 'Delete' : 'Cancel'}
        </Button>,
        <Button key='submit' type='primary' onClick={handleOk}>
          {props.editMode ? 'Update Event' : 'Add Event'}
        </Button>,
      ]}
    >
      <AddEvent
        title={title}
        onTitleChange={handleTitleChange}
        start={props.eventStart}
        end={props.eventEnd}
        onTimeChange={props.onTimeChange}
      />
    </Modal>
  )
}
export default AddEventModal

// class AddEventModal extends Component {
//   state = {
//     title: '',
//   }

//   /**
//    * To show the title auto fill and
//    * re-initialize the title on adding new event
//    */
//   static getDerivedStateFromProps(nextProps) {
//     if (nextProps.eventTitle) {
//       return {
//         title: nextProps.eventTitle,
//       }
//     } else {
//       return {
//         title: '',
//       }
//     }
//   }

//   /**
//    * Sets the title in the state
//    * @param {event} event - JS/React event
//    */
//   handleTitleChange = (event) => {
//     this.setState({
//       title: event.target.value,
//     })
//   }

//   /**
//    * Updates the event
//    */
//   handleOk = () => {
//     this.props.onOk(this.state.title)
//   }

//   render() {
//     const { title } = this.state
//     return (
//       <Modal
//         visible={this.props.visible}
//         onOk={this.handleOk}
//         onCancel={this.props.onClose}
//         footer={[
//           <Button key='back' onClick={this.props.onCancel}>
//             {this.props.editMode ? 'Delete' : 'Cancel'}
//           </Button>,
//           <Button key='submit' type='primary' onClick={this.handleOk}>
//             {this.props.editMode ? 'Update Event' : 'Add Event'}
//           </Button>,
//         ]}
//       >
//         <AddEvent
//           title={title}
//           onTitleChange={this.handleTitleChange}
//           start={this.props.eventStart}
//           end={this.props.eventEnd}
//           onTimeChange={this.props.onTimeChange}
//         />
//       </Modal>
//     )
//   }
// }
