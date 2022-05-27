import './Message.css';

function Message({type, content}) {
  const cls = `${type} Message`;

  return (
    <div className={cls}>
      {content}
    </div>
  );
}

export default Message;
