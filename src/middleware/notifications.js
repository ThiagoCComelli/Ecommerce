import { store } from 'react-notifications-component';

const notification = (props) => {
    store.addNotification({
        title: props.title || " ",
        message: props.message || " ",
        type: props.type || "default",
        insert: "top",
        container: "bottom-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true
        }
      })
}

export {notification}