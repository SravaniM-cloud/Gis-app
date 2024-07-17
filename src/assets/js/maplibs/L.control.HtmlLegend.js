'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
L.Control.vassarLogo = L.Control.extend({
    options: {
        position: 'bottomright',
        logopath: null,
    },
    onAdd: function (map) {
        var _this = this;
        this._map = map;
        this._container = L.DomUtil.create('div', 'leaflet-control leaflet-vassarlogo');
        if (this.options.logopath) {
            var logo = L.DomUtil.create('img', 'bottomvassarlogo', this._container);
            logo.src = this.options.logopath;
        }
        L.DomEvent.disableClickPropagation(this._container);
        L.DomEvent.disableScrollPropagation(this._container);
        return this._container;
    }

})
L.control.vasarlogo = function (options) {
    return new L.Control.vassarLogo(options);
};
L.Control.HtmlLegend = L.Control.extend({
    _map: null,
    _activeLayers: 0,
    _alwaysShow: false,
    options: {
        position: 'topright',

        // array of legend entries - see README for format
        legends: [],

        // if true, legend entries that are from a simple renderer will use compact presentation
        collapseSimple: false,

        // if true, will test to see if legend entries look stretched; these are usually in sets of 3 with the middle element having no label
        detectStretched: false,

        // if true, legends will be collapsed when a new instance is initialized
        collapsedOnInit: false
    },

    onAdd: function onAdd(map) {
        var _this = this;

        this._map = map;
        this._container = L.DomUtil.create('span', 'leaflet-control leaflet-legend');
        this._container.style.marginBottom = '25px'
        this._close = L.DomUtil.create('div', 'leaflet-legend-close', this._container);
        this._openContainer = L.DomUtil.create('div', 'leaflet-control leaflet-control-legend', this._container);
        this._legendContainer = L.DomUtil.create('span', 'leaflet-bar leaflet-html-legend', this._container);
        this._legendContainer.style.display = 'none';
        this._legendContainer.style.backgroundColor = 'transparent'
        this._close.style.display = 'none';
        this._legendContainer.style.border = '0px solid white';
        this._legendContainer.style.padding = '0px';
        this.firstLayerEverFlag = true;
        //  this._container.style.margin='0px'

        L.DomEvent.on(this._close, 'click', function () {
            _this.collapseContainer();
        });

        L.DomEvent.on(this._openContainer, 'click', function () {
            if (_this._activeLayers > 0) {
                _this.expandContainer();
            }
        });

        // Disable events on container
        L.DomEvent.disableClickPropagation(this._container);
        L.DomEvent.disableScrollPropagation(this._container);

        this.render();

        return this._container;
    },
    render: function render() {
        L.DomUtil.empty(this._legendContainer);

        this.options.legends.forEach(this._renderLegend, this);

        // this._checkVisibility();
    },
    addLegend: function addLegend(legend) {
        if (this._map) {
            //  this.collapseAllLegends()
            this._renderLegend(legend);
        }
        if (this.options.legends.find(function (element) {
            return element.name === legend.name;
        })) return;
        this.options.legends.push(legend);
        return true;
    },
    hasLegend: function hasLegend(legend) {
        if (this.options.legends.findIndex(function (element) {
            return element.name == legend.name;
        }) == -1 || this.options.legends.length == 0)
            return true;
        return false;
    },
    clearLegend: function clearLegend() {
        this.options.legends = [];
        L.DomUtil.empty(this._legendContainer);
    },
    updateLayerInstance: function updateLayerInstance(name, layer) {
        for (var i = 0; i < this.options.legends.length; i++) {
            if (this.options.legends[i].name === name) {
                this.options.legends[i].layer = layer;
                break;
            }
        }
    },
    _renderLegend: function _renderLegend(legend) {
        var _this2 = this;

        if (!legend.elements) {
            return;
        }

        var elements = legend.elements;

        var className = 'legend-block';

        if (this.options.detectStretched) {
            if (elements.length === 3 && elements[0].label !== '' && elements[1].label === '' && elements[2].label !== '') {
                className += ' legend-stretched';
            }
        }

        var block = L.DomUtil.create('div', className, this._legendContainer);
        block.style.marginTop = '-3px'

        if (legend.name) {
            (function () {
                var header = L.DomUtil.create('h4', null, block);
                header.style.backgroundColor = 'black';
                header.style.marginLeft = '5px';
                header.style.marginBottom = '0px';
                header.style.padding = '4px';
                //  header.style.width='80px'
                var caret=L.DomUtil.create('div', 'legend-caret', header);

                var heading = L.DomUtil.create('span', null, header);
                heading.innerHTML = legend.name
                heading.style.color = 'white';


                if (_this2.options.collapsedOnInit) {
                    L.DomUtil.addClass(header, 'closed');
                }

                L.DomEvent.on(caret, 'click', function () {
                    if (L.DomUtil.hasClass(header, 'closed')) {
                        L.DomUtil.removeClass(header, 'closed');
                    } else {
                        L.DomUtil.addClass(header, 'closed');
                    }
                }, _this2);
            })();
        }

        var elementContainer = L.DomUtil.create('div', 'legend-elements', block);

        elements.forEach(function (element) {
            _this2._addElement(element.html, element.label, element.style, elementContainer);
        }, this);

        this._connectLayer(block, legend);
    },
    _addElement: function _addElement(html, label, style, container) {
        var row = L.DomUtil.create('div', 'legend-row', container);
        if (html && !label && !style) {
            row.innerHTML = html;
            return;
        }
        var symbol = L.DomUtil.create('span', 'symbol', row);
        if (style) {
            // angular.forEach(style,function(v,k){
            //     symbol.style[k] = v;
            // });
            Object.entries(style).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2);

                var k = _ref2[0];
                var v = _ref2[1];
                symbol.style[k] = v;
            });
        }
        symbol.innerHTML = html;
        if (label) {
            L.DomUtil.create('label', null, row).innerHTML = label;
        }
    },
    _connectLayer: function _connectLayer(container, legend) {
        var _this3 = this;

        var layer = legend.layer;

        if (!layer) {
            this._alwaysShow = true;
            return;
        }

        if (this._map.hasLayer(layer)) {
            this._activeLayers += 1;
        } else {
            container.style.display = 'none';
        }

        container.classList.add('layer-control');
        _this3.expandContainer()

        this._map.on('layeradd', function (e) {
            if (e.layer === layer) {
                _this3._activeLayers += 1;
                container.style.display = '';
                _this3.collapseAllLegends();
                L.DomUtil.toBack(container);
                container.childNodes[0].classList.remove('closed');
                _this3.firstLayerEverFlag && _this3.expandContainer();
                _this3.firstLayerEverFlag = false;
                // this._checkVisibility();
            }
        }).on('layerremove', function (e) {
            if (e.layer === layer) {
                _this3._activeLayers -= 1;
                container.style.display = 'none';
                // this._checkVisibility();
                if (_this3._activeLayers < 1) _this3.collapseContainer();
            }
        });
    },


    // _checkVisibility() {
    //     if (this._alwaysShow || this._activeLayers) {
    //         this._legendContainer.style.display = '';
    //     }
    //     else {
    //         this._legendContainer.style.display = 'none';
    //         this._openContainer.style.display = '';
    //     }
    // },

    collapseAllLegends: function collapseAllLegends() {
        this._legendContainer.childNodes.forEach(function (node) {
            if (node.childNodes[0] && node.childNodes[0].nodeName === "H4") node.childNodes[0].classList.add('closed');
        });
    },
    collapseContainer: function collapseContainer() {
        this._legendContainer.style.display = 'none';
        this._openContainer.style.display = '';
        this._close.style.display = 'none';
    },
    expandContainer: function expandContainer() {
        if (this._activeLayers < 1) return;
        this._legendContainer.style.display = '';
        this._openContainer.style.display = 'none';
        this._close.style.display = '';
    }
});

L.control.htmllegend = function (options) {
    return new L.Control.HtmlLegend(options);
};


L.Control.HtmlLegendForVisibility = L.Control.extend({
    _map: null,
    _activeLayers: 0,
    _alwaysShow: false,
    options: {
        position: 'topright',

        // array of legend entries - see README for format
        legends: [],

        // if true, legend entries that are from a simple renderer will use compact presentation
        collapseSimple: false,

        // if true, will test to see if legend entries look stretched; these are usually in sets of 3 with the middle element having no label
        detectStretched: false,

        // if true, legends will be collapsed when a new instance is initialized
        collapsedOnInit: false,

        showByDefault : false
    },

    onAdd: function onAdd(map) {
        var _this = this;
        // console.log("\n In onAdd:: map",map);
        this._map = map;
        this._container = L.DomUtil.create('span', 'leaflet-control leaflet-legend');
        this._container.style.marginBottom = '0px';
        this._close = L.DomUtil.create('div', 'leaflet-legend-close', this._container);
        var draggable = new L.Draggable(this._container);
        draggable.enable();
        this._openContainer = L.DomUtil.create('div', 'leaflet-control leaflet-control-legend', this._container);
        this._legendContainer = L.DomUtil.create('span', 'leaflet-bar leaflet-html-legend', this._container);
        this._legendContainer.style.display = 'none';
        this._legendContainer.style.backgroundColor = 'white'
        this._close.style.display = 'none';
        this._legendContainer.style.border = '0px solid white';
        this._legendContainer.style.padding = '0px';
        this.firstLayerEverFlag = true;
        //  this._container.style.margin='0px'

        L.DomEvent.on(this._close, 'click', function () {
            // console.log("\n In this._close click ::_this._activeLayers ",_this._activeLayers);
            _this.collapseContainer();
        });

        L.DomEvent.on(this._openContainer, 'click', function () {
            // console.log("\n In this._openContainer click ::_this._activeLayers ",_this._activeLayers);
            if (_this._activeLayers > 0) {
                _this.expandContainer();
            }
        });

        // Disable events on container
        L.DomEvent.disableClickPropagation(this._container);
        L.DomEvent.disableScrollPropagation(this._container);

        // this.render();

        return this._container;
    },
    render: function render() {
        L.DomUtil.empty(this._legendContainer);

        this.options.legends.forEach(this._renderLegend, this);

        // this._checkVisibility();
    },
    addLegend: function addLegend(legend) {
        // console.log("\n In addLegend : legend",legend,"\n this._map",this._map);
        if (this._map) {
            //  this.collapseAllLegends()
            // console.log("\n In addLegend  inside : legend",legend,"\n this._map",this._map);
            this._renderLegend(legend);
        }
        if (this.options.legends.find(function (element) {
            return element.name === legend.name;
        })) return;
        this.options.legends.push(legend);
        return true;
    },
    hasLegend: function hasLegend(legend) {
        if (this.options.legends.findIndex(function (element) {
            return element.name == legend.name;
        }) == -1 || this.options.legends.length == 0)
            return true;
        return false;
    },
    clearLegend: function clearLegend() {
        this.options.legends = [];
        L.DomUtil.empty(this._legendContainer);
    },
    updateLayerInstance: function updateLayerInstance(name, layer) {
        for (var i = 0; i < this.options.legends.length; i++) {
            if (this.options.legends[i].name === name) {
                this.options.legends[i].layer = layer;
                break;
            }
        }
    },
    _renderLegend: function _renderLegend(legend) {
        var _this2 = this;
        // console.log("\n In _renderLegend : legend",legend,"\n this.options",this.options);
        if (!legend.elements) {
            return;
        }

        var elements = legend.elements;

        var className = 'legend-block';
        // console.log("\n In _renderLegend inside : legend",legend);
        if (this.options.detectStretched) {
            if (elements.length === 3 && elements[0].label !== '' && elements[1].label === '' && elements[2].label !== '') {
                className += ' legend-stretched';
            }
        }

        var block = L.DomUtil.create('div', className, this._legendContainer);
        block.style.marginTop = '-3px'

        if (legend.name) {
            (function () {
                var header = L.DomUtil.create('h4', null, block);
                header.style.backgroundColor = 'transparent';
                header.style.marginLeft = '0px';
                header.style.marginBottom = '8px';
                header.style.padding = '0px';
                //  header.style.width='80px'
                var caret=L.DomUtil.create('div', 'legend-caret', header);

                var heading = L.DomUtil.create('span', null, header);
                heading.innerHTML = legend.name
                heading.style.color = '#6C757D';


                if (_this2.options.collapsedOnInit) {
                    L.DomUtil.addClass(header, 'closed');
                }

                L.DomEvent.on(caret, 'click', function () {
                    // console.log("\n In _renderLegend click :: header ",header);
                    if (L.DomUtil.hasClass(header, 'closed')) {
                        // console.log("\n In _renderLegend click :: header removeClass closed header ",header);
                        L.DomUtil.removeClass(header, 'closed');
                    } else {
                        // console.log("\n In _renderLegend click :: header addClass closed header ",header);
                        L.DomUtil.addClass(header, 'closed');
                    }
                }, _this2);
            })();
        }

        var elementContainer = L.DomUtil.create('div', 'legend-elements', block);

        elements.forEach(function (element) {
            _this2._addElement(element.html, element.label, element.style, elementContainer);
        }, this);

        this._connectLayer(block, legend);
    },
    _addElement: function _addElement(html, label, style, container) {
        var row = L.DomUtil.create('div', 'legend-row', container);
        if (html && !label && !style) {
            row.innerHTML = html;
            return;
        }
        var symbol = L.DomUtil.create('span', 'symbol', row);
        if (style) {
            // angular.forEach(style,function(v,k){
            //     symbol.style[k] = v;
            // });
            Object.entries(style).forEach(function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2);

                var k = _ref2[0];
                var v = _ref2[1];
                symbol.style[k] = v;
            });
        }
        symbol.innerHTML = html;
        if (label) {
            L.DomUtil.create('label', null, row).innerHTML = label;
        }
    },
    _connectLayer: function _connectLayer(container, legend) {
        var _this3 = this;
        // console.log("\n In _connectLayer : legend",legend,"\n container",container);
        var layer = legend.layer;

        // if (!layer) {
        //     this._alwaysShow = true;
        //     return;
        // }

        // if (this._map.hasLayer(layer)) {
        //     this._activeLayers += 1;
        // } else {
        //     container.style.display = 'none';
        // }
        this._activeLayers += 1;
        container.classList.add('layer-control');
        if(_this3.options.showByDefault){
            _this3.expandContainer()
        }
        //  console.log("\n In _connectLayer inside : legend",legend,"\n container",container);      
        // this._map.on('layeradd', function (e) {
        //     if (e.layer === layer) {
        //         _this3._activeLayers += 1;
        //         container.style.display = '';
        //         _this3.collapseAllLegends();
        //         L.DomUtil.toBack(container);
        //         container.childNodes[0].classList.remove('closed');
        //         _this3.firstLayerEverFlag && _this3.expandContainer();
        //         _this3.firstLayerEverFlag = false;
        //         // this._checkVisibility();
        //     }
        // }).on('layerremove', function (e) {
        //     if (e.layer === layer) {
        //         _this3._activeLayers -= 1;
        //         container.style.display = 'none';
        //         // this._checkVisibility();
        //         if (_this3._activeLayers < 1) _this3.collapseContainer();
        //     }
        // });
    },


    // _checkVisibility() {
    //     if (this._alwaysShow || this._activeLayers) {
    //         this._legendContainer.style.display = '';
    //     }
    //     else {
    //         this._legendContainer.style.display = 'none';
    //         this._openContainer.style.display = '';
    //     }
    // },

    collapseAllLegends: function collapseAllLegends() {
        this._legendContainer.childNodes.forEach(function (node) {
            if (node.childNodes[0] && node.childNodes[0].nodeName === "H4") node.childNodes[0].classList.add('closed');
        });
    },
    collapseContainer: function collapseContainer() {
        this._legendContainer.style.display = 'none';
        this._openContainer.style.display = '';
        this._close.style.display = 'none';
    },
    expandContainer: function expandContainer() {
        // console.log("\n In expandContainer : this._activeLayers ",this._activeLayers );
        if (this._activeLayers < 1) return;
        this._legendContainer.style.display = '';
        this._openContainer.style.display = 'none';
        this._close.style.display = '';
    }
});

L.control.htmllegendforVisibility = function (options) {
    return new L.Control.HtmlLegendForVisibility(options);
};