import { Modal, Button } from 'antd'
import { useState, useEffect } from 'react'
import AddEvent from './AddEvent'

function AddEventModal(props) {
  const [title, setTitle] = useState('')
  useEffect(() => {
    if (props.eventTitle) {
      setTitle(props.eventTitle)
    } else {
      setTitle('')
    }
  }, [props])
  
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleOk = () => {
    props.onOk(title)
  }

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
