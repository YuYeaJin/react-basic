import PropTypes from "prop-types";
import { useState } from "react";

function Update(props) {
  //  title, body, onUpdate
  //   const title = props.title;
  //   const body = props.body;
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.bosy);

  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const body = event.target.body.value;
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
          {/* value 속성과 onChange 이벤트를 이용 상태 관리 */}
        </p>
        <p>
          <input type="submit" value="Update"></input>
        </p>
      </form>
    </article>
  );
}

Update.PropTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  onUpdate: PropTypes.func,
};

export default Update;
