import React from 'react';

import MyLink from 'components/MyLink/my-link';
import ItemList from 'components/ItemList/item-list';
import './item-list-container.scss';

class ItemListContainer extends React.Component {
	render() {
		const { name, img, author, id } = this.props.podcast;
		return (
			<div className="item-list-container">
				<MyLink to={`/podcast/${id}`}>
					<ItemList img={img} name={name} author={author} />
				</MyLink>
			</div>
		);
	}
}

export default ItemListContainer;
