class Photo {
	
	constructor(path) {
		this.path = path;
		this.title = "";
		this.descr = "";
		this.tags = [];
	}
	/**
	 * Add a tag to current image
	 * @param {string|array} A string for a direct tag or an array of tags to insert in tags property
	 */
	addTag(tag) {
		if(typeof tag == 'string') {
			tag = [tag];
		}
		tag.forEach((t) => {
			if(this.tags.indexOf(t) == -1) {
				this.tags.push(t);
			}
		});
	}
	setTitle(title) {
		if(typeof title == 'string')
			this.title = title;
	}
	setDescr(descr) {
		if(typeof descr == 'string')
			this.descr = descr;
	}

	getTitle() {
		return this.title;
	}
	getPath() {
		return this.path;
	}
	getDescr() {
		return this.descr;
	}
	getTags() {
		return this.tags;
	}

}

let _photocool = [];


function init() {
	let photo = new Photo("https://cdn.pixabay.com/photo/2020/04/20/08/25/art-gallery-5067113_960_720.jpg");
	photo.setTitle("Museum gallery");
	photo.setDescr("A very beaute white museum gallery");
	photo.addTag(['white', 'gallery', 'museum', 'pictures', 'art']);
	_photocool.push(photo);

	photo = new Photo("https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533_960_720.jpg");
	photo.setTitle("A cocktail at the beach");
	photo.setDescr("A very paradisiac beach with a cocktail on the sand");
	photo.addTag(['sand', 'ocean', 'beach', 'paradise', 'drinking', 'cocktail', 'sea']);
	_photocool.push(photo);

	photo = new Photo("https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533_960_720.jpg");
	photo.setTitle("A cocktail at the beach");
	photo.setDescr("A very paradisiac beach with a cocktail on the sand");
	photo.addTag(['sand', 'ocean', 'beach', 'paradise', 'drinking', 'cocktail', 'sea']);
	_photocool.push(photo);

photo = new Photo("https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533_960_720.jpg");
	photo.setTitle("A cocktail at the beach");
	photo.setDescr("A very paradisiac beach with a cocktail on the sand");
	photo.addTag(['sand', 'ocean', 'beach', 'paradise', 'drinking', 'cocktail', 'sea']);
	_photocool.push(photo);
	photo = new Photo("https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533_960_720.jpg");
	photo.setTitle("A cocktail at the beach");
	photo.setDescr("A very paradisiac beach with a cocktail on the sand");
	photo.addTag(['sand', 'ocean', 'beach', 'paradise', 'drinking', 'cocktail', 'sea']);
	_photocool.push(photo);
	photo = new Photo("https://cdn.pixabay.com/photo/2013/02/21/19/06/beach-84533_960_720.jpg");
	photo.setTitle("A cocktail at the beach");
	photo.setDescr("A very paradisiac beach with a cocktail on the sand");
	photo.addTag(['sand', 'ocean', 'beach', 'paradise', 'drinking', 'cocktail', 'sea']);
	_photocool.push(photo);
	drawPhotos();
}

function drawPhotos() {
	let i=0;
	let j=0;
	let thumbs = $('#thumbs');
	let tr = $('<tr>');
	_photocool.forEach((photo) => {
		if(i%5 == 0) {
			j++;
			i=0;
		}
		if(i == 0) {
			tr = $('<tr>');
		}
		let td = $('<td>');
		let img = new Image(100, 80);
		img.src = photo.getPath();
		img.alt = photo.getTitle();
		td.append(img);
		tr.append(td);
		if(i == 0)
			thumbs.append(tr);
		i++;
	});
	thumbs.append(tr);
}