var assets = (function(){
	var assets = {};
	
	//List of game images
	assets.images = [{
	    name: 'background',
	    id: 1,
	    src: 'images/background.png',
	    data: null
	}, {
	    name: 'raft',
	    id: 2,
	    src: 'images/The_raft.png',
	    data: null
	}, {
	    name: 'policeman',
	    id: 3,
	    src: 'images/Policeman.png',
	    data: null
	}, {
	    name: 'criminal',
	    id: 4,
	    src: 'images/Prisoner.png',
	    data: null
	}, {
	    name: 'mother',
	    id: 5,
	    src: 'images/Mother.png',
	    data: null
	}, {
	    name: 'father',
	    id: 6,
	    src: 'images/Father.png',
	    data: null
	}, {
	    name: 'boy1',
	    id: 7,
	    src: 'images/First_son.png',
	    data: null
	}, {
	    name: 'boy2',
	    id: 8,
	    src: 'images/Second_son.png',
	    data: null
	}, {
	    name: 'girl1',
	    id: 9,
	    src: 'images/First_daughter.png',
	    data: null
	}, {
	    name: 'girl2',
	    id: 10,
	    src: 'images/Second_daughter.png',
	    data: null
	}, {
	    name: 'arrow',
	    id: 11,
	    src: 'images/arrow.png',
	    data: null
	}, {
	    name: 'wrong',
	    id: 12,
	    src: 'images/wrong.png',
	    data: null
	}, {
	    name: 'logo',
	    id: 12,
	    src: 'images/logo.png',
	    data: null
	}];
	
	//The raft
	assets.raft = {
		position: {
			left: {
				x: 230,
				y: 200
			},
			right: {
				x: 460,
				y: 200
			}
		},
		seats : {
			seat1 : {
				position: {
					left: {
						x: 280,
						y: 300
					},
					right: {
						x: 500,
						y: 290
					}
				}
			},
			seat2 : {
				position: {
					left: {
						x: 310,
						y: 270 
					},
					right: {
						x: 540,
						y: 270
					}
				}
			}
		}
	};
	
	//The arrow
	assets.arrow = {
		position: {
			left: {
				x: 380,
				y: 400
			},
			right: {
				x: 540,
				y: 400
			}
		}
	};
	
	//List of game characters
	assets.characters = [
		{
			name: 'policeman',
			role: 'policeman',
			position : {
				left: {
					x: 40,
					y: 170
				},
				right: {
					x: 630,
					y: 100
				}
			}
		}, {
			name: 'criminal',
			role: 'criminal',
			position : {
				left: {
					x: 100,
					y: 190
				},
				right: {
					x: 700,
					y: 100
				}
			}
		}, {
			name: 'mother',
			role: 'mother',
			position : {
				left: {
					x: 40,
					y: 280
				},
				right: {
					x: 570,
					y: 180
				}
			}
		}, {
			name: 'father',
			role: 'father',
			position : {
				left: {
					x: 40,
					y: 400
				},
				right: {
					x: 620,
					y: 280
				}
			}
		}, {
			name: 'boy1',
			role: 'boy',
			position : {
				left: {
					x: 140,
					y: 440
				},
				right: {
					x: 700,
					y: 320
				}
			}
		}, {
			name: 'boy2',
			role: 'boy',
			position : {
				left: {
					x: 200,
					y: 440
				},
				right: {
					x: 760,
					y: 320
				}
			}
		}, {
			name: 'girl1',
			role: 'girl',
			position : {
				left: {
					x: 130,
					y: 310
				},
				right: {
					x: 640,
					y: 210
				}
			}
		}, {
			name: 'girl2',
			role: 'girl',
			position : {
				left: {
					x: 190,
					y: 310
				},
				right: {
					x: 700,
					y: 210
				}
			}
		}
	];
	
	return assets;
})();