L.Layer.Tooltip = L.Layer.extend({
    options: {
      pane: 'popupPane',
      nonBubblingEvents: ['mouseover', 'mousemove'],
      position: 'left',
      className: 'tooltip-custom',
      arrowClass: 'tooltip-custom-arrow',
      contentClass: 'tooltip-custom-inner',
      subtextClass: 'tooltip-custom-subtext',
      showClass: 'in',
      noWrap: false,
      wrapScreen: true,
      offset: [10, 5]
    },
  
    statics: {
  
      /**
       * @enum {String}
       */
      POSITIONS: {
        TOP:    'top',
        LEFT:   'left',
        BOTTOM: 'bottom',
        RIGHT:  'right'
      }
    },
  
  
    /**
     * @class L.Custom.Tooltip
     * @constructor
     * @param  {Object} options
     * @param  {*=}     source
     */
    initialize: function(options, source) {
  
      /**
       * @type {Element}
       */
      this._container   = null;
  
  
      /**
       * @type {Element}
       */
      this._arrow       = null;
  
  
      /**
       * @type {Element}
       */
      this._contentNode = null;
  
  
      /**
       * @type {Element}
       */
      this._subtext     = null;
  
  
      L.Util.setOptions(this, options);
  
  
      /**
       * @type {L.Layer}
       */
      this._source      = source;
    },
  
  
    /**
     * Creates elements
     */
    _initLayout: function() {
      var options = this.options;
      if (options.noWrap) {
        options.className += ' nowrap';
      }
      this._container   = L.DomUtil.create('div',
                            options.className + ' ' + options.position +
                            ' ' + options.showClass);
      this._arrow       = L.DomUtil.create('div',
                            options.arrowClass, this._container);
      this._contentNode = L.DomUtil.create('div',
                            options.contentClass, this._container);
      this._subtext     = L.DomUtil.create('div',
                            options.subtextClass, this._container);
    },
  
  
    /**
     * @param  {L.Map} map
     * @return {L.Custom.Tooltip}
     */
    onAdd: function(map) {
      this._map = map;
      this._initLayout();
      if (this.options.content) {
        this.setContent(this.options.content);
      }
      this.getPane().appendChild(this._container);
      this._map.on('zoomend', this.updatePosition);
      return this;
    },
  
  
    /**
     * @return {L.Custom.Tooltip}
     */
    show: function() {
      L.DomUtil.addClass(this._container, this.options.showClass);
      return this;
    },
  
  
    /**
     * @return {L.Custom.Tooltip}
     */
    hide: function() {
      L.DomUtil.removeClass(this._container, this.options.showClass);
      return this;
    },
  
  
    /**
     * @param  {L.Map} map
     * @return {L.Custom.Tooltip}
     */
    onRemove: function(map) {
      L.Util.cancelAnimFrame(this._updateTimer);
      this.getPane().removeChild(this._container);
      this._map.off('zoomend', this.updatePosition);
      this._map = null;
      return this;
    },
  
  
    /**
     * @param {String} content
     * @return {L.LatLng}
     */
    setContent: function(content) {
      this.options.content = content;
      if (this._map) {
        this._contentNode.innerHTML = content;
        this.updatePosition();
      }
      return this;
    },
  
  
    /**
     * @param {String} text
     * @return {L.Custom.Tooltip}
     */
    setSubtext: function(text) {
      this._subtext.innerHTML = text;
      this.updatePosition();
      return this;
    },
  
  
    /**
     * @param {L.LatLng} latlng
     * @return {L.Custom.Tooltip}
     */
    setLatLng: function(latlng) {
      this._latlng = latlng;
      this.updatePosition();
      return this;
    },
  
  
    /**
     * @param  {L.Point} point Position
     * @param  {String} position
     */
    _getOffset: function(point, position) {
      var container  = this._container;
      var options    = this.options;
      var width      = container.offsetWidth;
      var height     = container.offsetHeight;
      var POSITIONS  = L.Layer.Tooltip.POSITIONS;
  
      if (this.options.wrapScreen) {
        var mapSize = this._map.getSize();
        point = this._map.layerPointToContainerPoint(point);
        if (point.x + width / 2  > mapSize.x) {
          position = POSITIONS.LEFT;
        }
        if (point.x - width < 0) {
          position = POSITIONS.RIGHT;
        }
  
        if (point.y - height < 0) {
          position = POSITIONS.BOTTOM;
        }
  
        if (point.y + height > mapSize.y) {
          position = POSITIONS.TOP;
        }
      }
  
      var className = options.className + ' ' + position;
      if (L.DomUtil.hasClass(this._container, this.options.showClass)) {
        className = className + ' ' + options.showClass;
      }
      this._container.className = className;
  
      var offset = options.offset;
      if (position === POSITIONS.LEFT) {
        return new L.Point(-width - offset[0], -height / 2)._floor();
      } else if (position === POSITIONS.RIGHT) {
        return new L.Point(0 + offset[0], -height / 2)._floor();
      } else if (position === POSITIONS.TOP) {
        return new L.Point(-width / 2, -height - offset[1])._floor();
      } else if (position === POSITIONS.BOTTOM) {
        return new L.Point(-width / 2, 0 + offset[1])._floor();
      }
    },
  
  
    /**
     * @param  {L.Point=} point
     */
    updatePosition: function(point) {
      this._updateTimer = L.Util.requestAnimFrame(function() {
        if (this._map) {
          if (!point) {
              point = this._map.latLngToLayerPoint(this._latlng);
          }
          else {
              // new position defined, do not forget to update the _latlng
              this._latlng = this._map.layerPointToLatLng(point);
          }
          L.DomUtil.setPosition(this._container, point.add(
            this._getOffset(point, this.options.position))._floor());
        }
      }, this);
    }
  
  });
  
  L.Layer.tooltip = function(options) {
    return new L.Layer.Tooltip(options);
  };
  