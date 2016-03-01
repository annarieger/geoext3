/* Copyright (c) 2015-2016 The Open Source Geospatial Foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
/**
 * A data model that represents a `Capability` of a mapfish print service: It
 * can comfortably be generated by using an GeoExt.data.MapfishPrintProvider.
 *
 * @class GeoExt.data.model.print.Capability
 */
Ext.define('GeoExt.data.model.print.Capability', {
    extend: 'GeoExt.data.model.Base',
    requires: [
        'GeoExt.data.model.print.Layout'
    ],

    /**
     * @method layouts
     * Returns an Ext.data.Store of referenced
     * {@link GeoExt.data.model.print.Layout}s.
     * @return {Ext.data.Store} The store
     */

    fields: [
        { name: 'app', type: 'string' },
        { name: 'formats', type: 'auto', defaultValue: [] }
    ]
});