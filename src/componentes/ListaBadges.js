import React from "react";
import "./estilos/ListaBadges.css";

class ListaBadges extends React.Component {
  render() {
    return (
      <ul className="list-unstyled Badges__List">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <div>
                <img
                  src={badge.avatar}
                  alt="avatar"
                  className="BadgesListItem__avatar"
                />
              </div>
              <div>
                <div>
                  <strong>
                    {badge.nombre} {badge.apellido}
                  </strong>
                </div>
                <div className="Twitter__name">
                  <span className="Twitter__logo"></span>@{badge.twitter}
                </div>
                <div>{badge.profesion}</div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
export default ListaBadges;

{
  /*{badge.nombre} {badge.apellido}*/
}
