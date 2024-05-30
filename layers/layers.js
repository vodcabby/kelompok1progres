var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_kabkot_terdampak_banjir_bandang_sumbar2024_1 = new ol.format.GeoJSON();
var features_kabkot_terdampak_banjir_bandang_sumbar2024_1 = format_kabkot_terdampak_banjir_bandang_sumbar2024_1.readFeatures(json_kabkot_terdampak_banjir_bandang_sumbar2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kabkot_terdampak_banjir_bandang_sumbar2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kabkot_terdampak_banjir_bandang_sumbar2024_1.addFeatures(features_kabkot_terdampak_banjir_bandang_sumbar2024_1);
var lyr_kabkot_terdampak_banjir_bandang_sumbar2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kabkot_terdampak_banjir_bandang_sumbar2024_1, 
                style: style_kabkot_terdampak_banjir_bandang_sumbar2024_1,
                popuplayertitle: "kabkot_terdampak_banjir_bandang_sumbar2024",
                interactive: true,
                title: '<img src="styles/legend/kabkot_terdampak_banjir_bandang_sumbar2024_1.png" /> kabkot_terdampak_banjir_bandang_sumbar2024'
            });
var format_kec_terdampak_banjir_bandang_sumbar2024_2 = new ol.format.GeoJSON();
var features_kec_terdampak_banjir_bandang_sumbar2024_2 = format_kec_terdampak_banjir_bandang_sumbar2024_2.readFeatures(json_kec_terdampak_banjir_bandang_sumbar2024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kec_terdampak_banjir_bandang_sumbar2024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kec_terdampak_banjir_bandang_sumbar2024_2.addFeatures(features_kec_terdampak_banjir_bandang_sumbar2024_2);
var lyr_kec_terdampak_banjir_bandang_sumbar2024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kec_terdampak_banjir_bandang_sumbar2024_2, 
                style: style_kec_terdampak_banjir_bandang_sumbar2024_2,
                popuplayertitle: "kec_terdampak_banjir_bandang_sumbar2024",
                interactive: true,
                title: '<img src="styles/legend/kec_terdampak_banjir_bandang_sumbar2024_2.png" /> kec_terdampak_banjir_bandang_sumbar2024'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_kabkot_terdampak_banjir_bandang_sumbar2024_1.setVisible(true);lyr_kec_terdampak_banjir_bandang_sumbar2024_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_kabkot_terdampak_banjir_bandang_sumbar2024_1,lyr_kec_terdampak_banjir_bandang_sumbar2024_2];
lyr_kabkot_terdampak_banjir_bandang_sumbar2024_1.set('fieldAliases', {'nama_prop_': 'nama_prop_', 'nama_kab_1': 'nama_kab_1', });
lyr_kec_terdampak_banjir_bandang_sumbar2024_2.set('fieldAliases', {'nama_kab_1': 'nama_kab_1', 'nama_kec_1': 'nama_kec_1', 'K.Mnggal': 'K.Mnggal', 'K.hilang': 'K.hilang', });
lyr_kabkot_terdampak_banjir_bandang_sumbar2024_1.set('fieldImages', {'nama_prop_': '', 'nama_kab_1': '', });
lyr_kec_terdampak_banjir_bandang_sumbar2024_2.set('fieldImages', {'nama_kab_1': '', 'nama_kec_1': '', 'K.Mnggal': '', 'K.hilang': '', });
lyr_kabkot_terdampak_banjir_bandang_sumbar2024_1.set('fieldLabels', {'nama_prop_': 'inline label - always visible', 'nama_kab_1': 'inline label - always visible', });
lyr_kec_terdampak_banjir_bandang_sumbar2024_2.set('fieldLabels', {'nama_kab_1': 'inline label - always visible', 'nama_kec_1': 'inline label - always visible', 'K.Mnggal': 'inline label - always visible', 'K.hilang': 'inline label - always visible', });
lyr_kec_terdampak_banjir_bandang_sumbar2024_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});