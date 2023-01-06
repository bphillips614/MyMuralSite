const ARROW = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>`;
const INFO = `<svg class="info-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 24c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm1-6h-2v-8h2v8zm-1-12.25c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25.56-1.25 1.25-1.25z"/></svg>`;
const MURAL = `<svg class="mural-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22 11.702v10.298h-20v-10.227c.588.573 1.256 1.095 2 1.555v6.672h16v-6.723c.743-.464 1.406-.996 2-1.575zm2-7.702c0 5.218-4.122 10.5-12 10.5-8.245 0-12-5.443-12-10.5h2v-2h20v2h2zm-22.939 1c.118 1.078.429 2.154.939 3.161v-3.161h-.939zm10.939 8.5c3.484 0 6.158-1.118 8-2.8v-6.7c-.553 0-2 .203-2 2v1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5v-.5c0-.552-.447-1-1-1s-1 .448-1 1v4c0 .552-.447 1-1 1s-1-.448-1-1v-3c0-.552-.447-1-1-1s-1 .448-1 1v1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5v-3.5c0-1.766-1.447-2-2-2v6.774c1.803 1.632 4.442 2.726 8 2.726zm10.938-8.5h-.938v3.096c.502-.981.817-2.031.938-3.096z"/></svg>`;
const NEIGHBORHOOD = `<svg class="neighborhood-icon" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M6 7v-7h13v10h5v14h-23v-17h5zm0 16v-4h-1v4h1zm8-4h-3v4h3v-4zm6 0h-1v4h1v-4zm2-7h-3v6h2v4h1v-10zm-5-10h-9v20h1v-5h7v5h1v-20zm-13 20v-4h2v-9h-3v13h1zm17-6h-1v-2h1v2zm-17-2h1v2h-1v-2zm8 1h-2v-2h2v2zm3 0h-2v-2h2v2zm-10-4v2h-1v-2h1zm7 1h-2v-2h2v2zm3 0h-2v-2h2v2zm-3-3h-2v-2h2v2zm3 0h-2v-2h2v2zm-3-3h-2v-2h2v2zm3 0h-2v-2h2v2z"/></svg>`;
const ADD = `<svg class="library-mural-add-pic" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>`;

var murals = [];

const Page = {
	Home: "home",
	Library: "library"
};

function getPage() {
	switch ($(".nav-active").attr("id")) {
		case "home-nav":
			return Page.Home;
		case "library-nav":
			return Page.Library;
	}
}

function initHome() {
	var html = `
		<img id="mural-bkg-1" class="main-bkg active-bkg" src="images/map_of_what_is_effortless.jpeg"/>
		<img id="mural-bkg-2" class="main-bkg hidden" src="images/irene.jpeg"/>
		<div id="mural-1" class="main-center active-mural">
			<div class="main-center-front">
				<p class="main-street">North Ave & Highland Ave</p>
				<p class="main-artist">Jonathon Doberson</p>
				<hr>
				<p class="main-read-praise main-center-button button">Read Praise</p>
			</div>
			<div class="main-center-back hidden">
				<p class="main-blurb">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum vulputate ipsum, sed vehicula velit viverra vitae. Praesent sit amet mattis mi. Praesent pretium ornare pellentesque. Sed eu efficitur lorem, vel consectetur nulla. Morbi aliquam quam quis felis fringilla sodales. Pellentesque metus arcu, iaculis ullamcorper convallis et, condimentum in sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. In est turpis, interdum et nisi rhoncus, auctor congue massa. Donec tincidunt, quam vitae accumsan convallis, turpis ipsum hendrerit tortor, nec semper nisl magna sed ante. Nulla ante sapien, molestie id scelerisque eu, pharetra quis neque. Donec a volutpat libero. Aliquam erat volutpat. Praesent rhoncus quam nec semper sollicitudin. Nunc lacinia finibus nisl non tempus.
				</p>
				<hr>
				<p class="main-return main-center-button button">Back</p>
			</div>
			<div class="main-next main-arrow main-next-front">
				${ARROW}
			</div>
			<div class="main-prev main-arrow main-prev-front">
				${ARROW}
			</div>
		</div>
		<div id="mural-2" class="main-center hidden">
			<div class="main-center-front">
				<p class="main-street">Trinity Pl & Howard Ave</p>
				<p class="main-artist">Janice Dieugh</p>
				<hr>
				<p class="main-read-praise main-center-button button">Read Praise</p>
			</div>
			<div class="main-center-back hidden">
				<p class="main-blurb">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam elementum vulputate ipsum, sed vehicula velit viverra vitae. Praesent sit amet mattis mi. Praesent pretium ornare pellentesque. Sed eu efficitur lorem, vel consectetur nulla. Morbi aliquam quam quis felis fringilla sodales. Pellentesque metus arcu, iaculis ullamcorper convallis et, condimentum in sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. In est turpis, interdum et nisi rhoncus, auctor congue massa. Donec tincidunt, quam vitae accumsan convallis, turpis ipsum hendrerit tortor, nec semper nisl magna sed ante. Nulla ante sapien, molestie id scelerisque eu, pharetra quis neque. Donec a volutpat libero. Aliquam erat volutpat. Praesent rhoncus quam nec semper sollicitudin. Nunc lacinia finibus nisl non tempus.
				</p>
				<hr>
				<p class="main-return main-center-button button">Back</p>
			</div>
			<div class="main-next main-arrow main-next-front">
				${ARROW}
			</div>
			<div class="main-prev main-arrow main-prev-front">
				${ARROW}
			</div>
		</div>`;

	// show home page
	$("#main").append(html);
	$("#main, #nav").fadeIn(() => {
		$("#main, #nav").removeClass("hidden");
	});
	
	// toggle card side
	$(".main-center-button").click(() => {
		$(".main-center-front, .main-center-back").toggleClass("hidden");
		$(".main-next").toggleClass("main-next-back main-next-front");
		$(".main-prev").toggleClass("main-prev-back main-prev-front");
	});
	
	// toggle card
	$(".main-arrow").click((elem) => {
		
		var $bkg, $info;
		if($(elem.currentTarget).attr("class").includes("main-next")) {
			// next card
			$bkg = $(".active-bkg").next().hasClass("main-bkg") ? $(".active-bkg").next() : $(".main-bkg").first();
			$info = $(".active-mural").next(".main-center").length ? $(".active-mural").next(".main-center") : $(".main-center").first();
		} 
		else {
			// prev card
			$bkg = $(".active-bkg").prev().hasClass("main-bkg") ? $(".active-bkg").prev() : $(".main-bkg").last();
			$info = $(".active-mural").prev(".main-center").length ? $(".active-mural").prev(".main-center") : $(".main-center").last();
		}
		
		// toggle bkg
		toggleHomeBkg($bkg);
		
		// toggle info
		$(".active-mural").fadeOut().addClass("active-mural-fading");
		$info.fadeIn(() => {
			$info.addClass("active-mural");
			$(".active-mural-fading").removeClass("active-mural active-mural-fading").addClass("hidden");
			$(".active-mural").removeClass("hidden");
		});
	});
	
	// init nav
	$("#library-nav").click(initLibrary);
	
	// init settings
	$("#settings-icon").click(initSettings);
}

function loadHome() {
	$(".active-mural").fadeIn();
	$(".nav-active").removeClass("nav-active");
	$("#home-nav").addClass("nav-active");
	$("#library-nav").click(() => {
		$(".active-mural").fadeOut();
		loadLibrary();
	});
}

function initLibrary() {
	var html = `
		<div id="library" class="hidden">
			<div mural="1" class="library-mural">
				<img class="library-mural-pic" src="images/map_of_what_is_effortless.jpeg">
			</div>
			<div mural="2" class="library-mural">
				<img class="library-mural-pic" src="images/irene.jpeg">
			</div>
			<div class="library-mural library-mural-add admin-only">
				${ADD}
			</div>
		</div>`;
	
	// show library page
	$("#main").append(html);
	$(".active-mural").fadeOut();
	$("#library").fadeIn(() => {
		$("#library").removeClass("hidden");
	});
	
	// reflect nav
	$(".nav-active").removeClass("nav-active");
	$("#library-nav").addClass("nav-active");
	$("#library-nav").off();
	$("#home-nav").click(() => {
		$("#library").fadeOut();
		loadHome();
		$("#library-nav").click(() => {
			$(".active-mural").fadeOut();
			loadLibrary();
		});
	});
	
	// open mural on home page
	$(".library-mural:not(.library-mural-add)").click((event) => {
		
		// change classes
		var mural_id = $(event.target).parent().attr("mural");
		$(".active-mural").removeClass("active-mural").addClass("hidden");
		$(`#mural-${mural_id}`).removeClass("hidden").addClass("active-mural");
		
		// transition
		toggleHomeBkg($(`#mural-bkg-${mural_id}`));
		$("#library").fadeOut()
		loadHome();
	});
	
	// open settings
	$(".library-mural-add").click(initSettings);
}

function loadLibrary() {
	$("#library").fadeIn();
	$(".nav-active").removeClass("nav-active");
	$("#library-nav").addClass("nav-active");
}

/*
 * Helper for card changes
 */
function toggleHomeBkg($bkg) {
	$(".active-bkg").fadeOut().addClass("active-bkg-fading");
	$bkg.fadeIn(() => {
		$bkg.addClass("active-bkg");
		$(".active-bkg-fading").removeClass("active-bkg active-bkg-fading").addClass("hidden");
		$(".active-bkg").removeClass("hidden");
	});
}

function initSettings() {
	var html = `
		<div id="settings-container" class="hidden">
			<div id="settings">
				<div id="settings-close" class="close">&times;</div>
				<div id="settings-nav">
					<div class="settings-nav-icon active-settings">${MURAL}</div>
					<div class="settings-nav-icon">${NEIGHBORHOOD}</div>
				</div>
				<div id="settings-main">
					<p id="admin-header">Add Mural</p>
					<table>
						<tr>
							<td><label>Neighborhood</label></td>
							<td>
								<select id="admin-neighborhood">
									<option value="1">Ponce</option>
									<option value="2">Decatur</option>
									<option value="3">Cabbagetown</option>
								</select>
							</td>
							<td>${INFO}</td>
						</tr>
						<tr>
							<td><label>Artist</label></td>
							<td><input type="text" id="admin-artist" autocomplete="off"/></td>
							<td>${INFO}</td>
						</tr>
						<tr>
							<td><label>Discovery Date</label></td>
							<td><input type="text" id="admin-discovery-date" autocomplete="off"/></td>
							<td>${INFO}</td>
						</tr>
						<tr>
							<td><label>Last Visit Date</label></td>
							<td><input type="text" id="admin-last-visit-date" autocomplete="off"/></td>
							<td>${INFO}</td>
						</tr>
						<tr>
							<td><label>Current</label></td>
							<td>
								<select id="admin-current">
									<option value="1" selected>Yes</option>
									<option value="0">No</option>
									<option value="2">Unsure</option>
								</select>
							</td>
							<td>${INFO}</td>
						</tr>
						<tr>
							<td><label>Latitude</label></td>
							<td><input type="text" id="admin-latitude" autocomplete="off"></td>
							<td>${INFO}</td>
						</tr>
						<tr>
							<td><label>Longitude</label></td>
							<td><input type="text" id="admin-longitude" autocomplete="off"></td>
							<td>${INFO}</td>
						</tr>
						<tr>
							<td><label>Street</label></td>
							<td><input type="text" id="admin-street" autocomplete="off"></td>
							<td>${INFO}</td>
						</tr>
						<tr>
							<td><label>Photo</label></td>
							<td>
								<input type="file" id="admin-photo" hidden>
								<label for="admin-photo" id="admin-photo-button">Select Photo</label>
								<!-- <span id="admin-chosen-photo"></span> -->
							</td>
							<td>${INFO}</td>
						</tr>
					</table>
					<div class="admin-save-button" id="mural-add">Save</div>
				</div>
			</div>
		</div>
	`;
	$("#settings-icon").after(html);
	
	$("#admin-discovery-date").datepicker();
	$("#admin-last-visit-date").datepicker();
	
	$(".active-mural, #library").fadeOut();
	$("#settings-container").fadeIn(() => {
		$("#settings-container").removeClass("hidden");
	});
	
	$("#settings-close").click(() => {
		$("#settings-container").fadeOut(() => {
			$("#settings-container").remove();
		});
		switch (getPage()) {
			case Page.Home: {
				loadHome();
				break;
			}
			case Page.Library: {
				loadLibrary();
				break;
			}
		}
	});
	
	/*
	 * Add mural subsection
	 */
	$("#admin-photo").change(() => {
		$("#admin-photo-button").text($("#admin-photo")[0].files[0].name);
	});
	
	// save mural
	$("#mural-add").click(constructAddMuralJson);
}

function constructAddMuralJson() {
	var photo = $("#admin-photo")[0].files[0];
	var reader = new FileReader();
	const preview = document.querySelector('img');
	reader.addEventListener("load", () => {
		// convert image file to base64 string
		var base64 = reader.result.split(";base64,")[1];
		var data = {
			neighborhood: $("#admin-neighborhood").val(),
			artist: $("#admin-artist").val(),
			discoveryDate: $("#admin-discovery-date").val(),
			lastVisitDate: $("#admin-last-visit-date").val(),
			current: $("#admin-current").val(),
			latitude: $("#admin-latitude").val(),
			longitude: $("#admin-longitude").val(),
			street: $("#admin-street").val(),
			photo: base64
		};	
		var json = {
			action: "add",
			data: JSON.stringify(data)
		};
		addMural(json);
	}, false);  
	
	if (photo) {
		reader.readAsDataURL(photo);
	}
}

function addMural(json) {
	console.log("addMural() json:");
	console.log(json);
	$.ajax({
		url: "/MyMuralSite/mural",
		data: json,
		type: "POST",
		success: () => {
			console.log("data succesfully added");
		},
		error: (xhr) => {
			console.error(xhr);
		}
	});
}

function getAllMurals() {
	$.ajax({
		url: "/MyMuralSite/mural",
		data: {
			action: "get"
		},
		dataType: "json",
		success: (data) => {
			data.forEach(mural => murals.push(JSON.parse(mural)));
		},
		error: (xhr) => {
			console.error(xhr);
		}
	});
}

$(document).ready(() => {
	getAllMurals();
	initHome();
});