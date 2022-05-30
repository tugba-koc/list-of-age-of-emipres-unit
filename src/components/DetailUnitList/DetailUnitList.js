import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getDetailOfUnit } from "../../redux/actions/items";
import "../../scss/component/main.scss";

function DetailUnitList({ unit_id }) {

  const dispatch = useDispatch();

  const detailOfUnit = useSelector(state => state.items.detailOfUnit);

  React.useEffect(() => {
    dispatch(getDetailOfUnit(unit_id));
  }, [dispatch, unit_id])

  return (
    <React.Fragment>
      {detailOfUnit.map(el => (
        <div key={el.id}>
          <table className='table table-detail'>
            <tbody>
            <tr>
              <th>ID :</th>
              <td>{el.id}</td>
            </tr>
            <tr>
              <th>Name :</th>
              <td>{el.name}</td>
            </tr>
            <tr>
              <th>Description :</th>
              <td>{el.description}</td>
            </tr>
            <tr>
              <th>Min. Required Age :</th>
              <td>{el.age}</td>
            </tr>
            <tr>
              <th>Wood Cost :</th>
              <td>{el.cost ? el.cost.Wood : "-"}</td>
            </tr>
            <tr>
              <th>Food Cost :</th>
              <td>{el.cost ? el.cost.Food : "-"}</td>
            </tr>
            <tr>
              <th>Gold Cost :</th>
              <td>{el.cost ? el.cost.Gold : "-"}</td>
            </tr>
            <tr>
              <th>Build Time :</th>
              <td>{el.build_time ? el.build_time : "-"}</td>
            </tr>
            <tr>
              <th>Reload Time :</th>
              <td>{el.reload_time ? el.reload_time : "-"}</td>
            </tr>
            <tr>
              <th>Hit Points :</th>
              <td>{el.hit_points ? el.hit_points : "-"}</td>
            </tr>
            <tr>
              <th>Attack :</th>
              <td>{el.attack ? el.attack : "-"}</td>
            </tr>
            <tr>
              <th>Accuracy :</th>
              <td>{el.armor ? el.armor : "-"}</td>
            </tr>
            </tbody>
          </table>
        </div>
      ))}
    </React.Fragment>
  )
}

export default DetailUnitList