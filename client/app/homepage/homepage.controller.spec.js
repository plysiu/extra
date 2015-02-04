'use strict';

describe('Controller: HomepageCtrl', function () {

  // load the controller's module
  beforeEach(module('devMashApp'));

  var HomepageCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('http://devplan.uek.krakow.pl/api/groups')
      .respond(
      [{"id": 1, "name": "AZS Aerobic I", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2,
        "name": "BPZ- CF1Bd A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3, "name": "BPZ- CF1Bd B", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 4,
        "name": "BPZ- CF1Md",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 5, "name": "BPZ- CF2Bd A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 6,
        "name": "BPZ- CF2Bd B",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 7, "name": "BPZ- CF3Bd A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 8,
        "name": "BPZ- ET 14/15 Bachelor Winter",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 9, "name": "BPZ- ET 14/15 Master Winter", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 10,
        "name": "BPZ- IB1Bd A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 11, "name": "BPZ- IB1Bd B", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 12,
        "name": "BPZ- IB1Bd C",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 13, "name": "BPZ- IB1Bd D", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 14,
        "name": "BPZ- IB1Md A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 15, "name": "BPZ- IB1Md B", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 16,
        "name": "BPZ- IB2Bd A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 17, "name": "BPZ- IB2Bd B", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 18,
        "name": "BPZ- IB2Bd C",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 19, "name": "BPZ- IB2Md A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 20,
        "name": "BPZ- IB2Md B",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 21, "name": "BPZ- IB3Bd A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 22,
        "name": "BPZ- IB3Bd B",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 23, "name": "BPZ- IB3Bd C", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 24,
        "name": "BPZ- PHD 14/15 1st year Winter",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 25, "name": "BPZ- PHD 14/15 2nd year Winter", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 26,
        "name": "BPZ-PHD 14/15 3rd year Winter",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 27, "name": "DeDZEk3001Em", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 28,
        "name": "DeDZRc2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 29, "name": "DeDZRc3011Co", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 30,
        "name": "DeDZRc3011Ra",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 31, "name": "Doktoranckie dzienne  WE 1 rok", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 32,
        "name": "Doktoranckie dzienne  WE 2 rok",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 33, "name": "Doktoranckie dzienne  WE 3 rok", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 34,
        "name": "Doktoranckie dzienne  WF 1 rok",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 35, "name": "Doktoranckie dzienne  WF 2 rok", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 36,
        "name": "Doktoranckie dzienne  WF 3 rok",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 37, "name": "Doktoranckie dzienne  WT 1 rok", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 38,
        "name": "Doktoranckie dzienne  WZ 1 rok",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 39, "name": "Doktoranckie dzienne  WZ 2 rok", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 40,
        "name": "Doktoranckie dzienne  WZ 3 rok",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 41, "name": "Doktoranckie zaoczne  WZ 2 rok", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 42,
        "name": "Doktoranckie zaoczne  WZ 3 rok",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 43, "name": "E", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 44,
        "name": "KF RiF A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 45, "name": "KF RiF B", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 46,
        "name": "KF RiF C",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 47, "name": "KF RiF D", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 48,
        "name": "KrDUAg1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 49, "name": "KrDUAg1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 50,
        "name": "KrDUAg2011Am",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 51, "name": "KrDUAg2011Au", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 52,
        "name": "KrDUEk1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 53, "name": "KrDUEk1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 54,
        "name": "KrDUEk1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 55, "name": "KrDUEk1014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 56,
        "name": "KrDUEk1021",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 57, "name": "KrDUEk1022", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 58,
        "name": "KrDUEk1023",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 59, "name": "KrDUEk1024", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 60,
        "name": "KrDUEk2001Em",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 61, "name": "KrDUEk2001Gn", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 62,
        "name": "KrDUEk2001Pi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 63, "name": "KrDUEk2001Sb", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 64,
        "name": "KrDUEk2001Zd",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 65, "name": "KrDUEk2002Em", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 66,
        "name": "KrDUEk2002Gn",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 67, "name": "KrDUFr1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 68,
        "name": "KrDUFr1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 69, "name": "KrDUFr1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 70,
        "name": "KrDUFr1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 71, "name": "KrDUFr1015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 72,
        "name": "KrDUFr1021",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 73, "name": "KrDUFr1022", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 74,
        "name": "KrDUFr1023",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 75, "name": "KrDUFr1024", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 76,
        "name": "KrDUFr1025",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 77, "name": "KrDUFr1031", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 78,
        "name": "KrDUFr1032",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 79, "name": "KrDUFr1033", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 80,
        "name": "KrDUFr1034",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 81, "name": "KrDUFr2011Di", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 82,
        "name": "KrDUFr2011Dp",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 83, "name": "KrDUFr2011Fd", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 84,
        "name": "KrDUFr2011Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 85, "name": "KrDUFr2012Dp", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 86,
        "name": "KrDUFr2012Fd",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 87, "name": "KrDUFr2012Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 88,
        "name": "KrDUFr2013Fd",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 89, "name": "KrDUFr2013Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 90,
        "name": "KrDUFr2021Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 91, "name": "KrDUFr2022Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 92,
        "name": "KrDUFr2023Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 93, "name": "KrDUGa1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 94,
        "name": "KrDUGa1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 95, "name": "KrDUGa2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 96,
        "name": "KrDUGa2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 97, "name": "KrDUGa2013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 98,
        "name": "KrDUGp1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 99, "name": "KrDUGp1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 100,
        "name": "KrDUGp2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 101, "name": "KrDUGp2012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 102,
        "name": "KrDUGp2013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 103, "name": "KrDUIe2011Mo", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 104,
        "name": "KrDUIe2012Mo",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 105, "name": "KrDUIs1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 106,
        "name": "KrDUIs1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 107, "name": "KrDUIs1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 108,
        "name": "KrDUIs2011Si",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 109, "name": "KrDUMg1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 110,
        "name": "KrDUMg1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 111, "name": "KrDUMg1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 112,
        "name": "KrDUMg1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 113, "name": "KrDUMg1015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 114,
        "name": "KrDUMg2001Eb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 115, "name": "KrDUMg2001Hz", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 116,
        "name": "KrDUMg2002Hz",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 117, "name": "KrDUMg2003Hz", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 118,
        "name": "KrDUMr1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 119, "name": "KrDUMr1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 120,
        "name": "KrDUMr1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 121, "name": "KrDUMr1014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 122,
        "name": "KrDURc1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 123, "name": "KrDURc1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 124,
        "name": "KrDURc1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 125, "name": "KrDURc1021", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 126,
        "name": "KrDURc1022",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 127, "name": "KrDURc1023", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 128,
        "name": "KrDURc2011Co",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 129, "name": "KrDURc2011Ra", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 130,
        "name": "KrDURc2012Co",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 131, "name": "KrDURc2012Ra", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 132,
        "name": "KrDURc2013Ra",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 133, "name": "KrDURc2014Ra", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 134,
        "name": "KrDURc2015Ra",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 135, "name": "KrDUSm1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 136,
        "name": "KrDUSm1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 137, "name": "KrDUSm2001Sw", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 138,
        "name": "KrDUSm2001Zm",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 139, "name": "KrDUSm2002Zm", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 140,
        "name": "KrDUTo1011Ma",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 141, "name": "KrDUTo1011Mb", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 142,
        "name": "KrDUTo1011Za",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 143, "name": "KrDUTo1011Zb", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 144,
        "name": "KrDUTo1012Ma",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 145, "name": "KrDUTo1012Za", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 146,
        "name": "KrDUTo1012Zb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 147, "name": "KrDUTr1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 148,
        "name": "KrDUTr1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 149, "name": "KrDUTr2011Hg", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 150,
        "name": "KrDUTr2011Tm",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 151, "name": "KrDUZA1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 152,
        "name": "KrDUZA1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 153, "name": "KrDUZA1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 154,
        "name": "KrDUZA1021",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 155, "name": "KrDUZA1022", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 156,
        "name": "KrDUZA1023",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 157, "name": "KrDUZA2011Mm", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 158,
        "name": "KrDUZA2011Zp",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 159, "name": "KrDUZa2011Zz", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 160,
        "name": "KrDUZa2012Mm",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 161, "name": "KrDUZA2012Zp", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 162,
        "name": "KrDUZA2012Zz",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 163, "name": "KrDUZI1011zp", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 164,
        "name": "KrDUZI1011Ża",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 165, "name": "KrDZAd1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 166,
        "name": "KrDZAd1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 167, "name": "KrDZAd1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 168,
        "name": "KrDZAd2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 169, "name": "KrDZAd2012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 170,
        "name": "KrDZAd3011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 171, "name": "KrDZAg1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 172,
        "name": "KrDZAg1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 173, "name": "KrDZAg1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 174,
        "name": "KrDZAg1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 175, "name": "KrDZAg2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 176,
        "name": "KrDZAg2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 177, "name": "KrDZAg2013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 178,
        "name": "KrDZAg3013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 179, "name": "KrDZAg3014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 180,
        "name": "KrDZEk1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 181, "name": "KrDZEk1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 182,
        "name": "KrDZEk1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 183, "name": "KrDZEk1014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 184,
        "name": "KrDZEk1015",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 185, "name": "KrDZEk1021", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 186,
        "name": "KrDZEk1022",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 187, "name": "KrDZEk1023", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 188,
        "name": "KrDZEk1024",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 189, "name": "KrDZEk1025", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 190,
        "name": "KrDZEk2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 191, "name": "KrDZEk2012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 192,
        "name": "KrDZEk2013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 193, "name": "KrDZEk2014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 194,
        "name": "KrDZEk2021",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 195, "name": "KrDZEk2022", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 196,
        "name": "KrDZEk2023",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 197, "name": "KrDZEk2024", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 198,
        "name": "KrDZEk3001Em",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 199, "name": "KrDZEk3001Gn", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 200,
        "name": "KrDZEk3001Pi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 201, "name": "KrDZEk3001Sb", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 202,
        "name": "KrDZEK3002Em",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 203, "name": "KrDZEp1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 204,
        "name": "KrDZEp1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 205, "name": "KrDZEp2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 206,
        "name": "KrDZEp2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 207, "name": "KrDZEp3011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 208,
        "name": "KrDZEp3012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 209, "name": "KrDZFr1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 210,
        "name": "KrDZFr1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 211, "name": "KrDZFr1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 212,
        "name": "KrDZFr1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 213, "name": "KrDZFr1015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 214,
        "name": "KrDZFr1021",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 215, "name": "KrDZFr1022", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 216,
        "name": "KrDZFr1023",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 217, "name": "KrDZFr1024", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 218,
        "name": "KrDZFr1025",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 219, "name": "KrDZFr2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 220,
        "name": "KrDZFr2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 221, "name": "KrDZFr2013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 222,
        "name": "KrDZFr2014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 223, "name": "KrDZFr2021", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 224,
        "name": "KrDZFr2022",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 225, "name": "KrDZFr2023", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 226,
        "name": "KrDZFr2024",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 227, "name": "KrDZFr3011Bk", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 228,
        "name": "KrDZFr3011Fd",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 229, "name": "KrDZFr3011Rn", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 230,
        "name": "KrDZFr3011Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 231, "name": "KrDZFr3012Fd", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 232,
        "name": "KrDZFr3012Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 233, "name": "KrDZFr3013Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 234,
        "name": "KrDZFr3014Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 235, "name": "KrDZGa1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 236,
        "name": "KrDZGa1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 237, "name": "KrDZGa1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 238,
        "name": "KrDZGa1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 239, "name": "KrDZGa2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 240,
        "name": "KrDZGa2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 241, "name": "KrDZGa2013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 242,
        "name": "KrDZGa3011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 243, "name": "KrDZGa3012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 244,
        "name": "KrDZGa3013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 245, "name": "KrDZGi1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 246,
        "name": "KrDZGi1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 247, "name": "KrDZGi1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 248,
        "name": "KrDZGi2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 249, "name": "KrDZGi2012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 250,
        "name": "KrDZGi2013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 251, "name": "KrDZGi3011Ip", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 252,
        "name": "KrDZGi3012Ip",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 253, "name": "KrDZGi4011Ip", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 254,
        "name": "KrDZGi4012Ip",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 255, "name": "KrDZGi4013Ip", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 256,
        "name": "KrDZGp1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 257, "name": "KrDZGp1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 258,
        "name": "KrDZGp2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 259, "name": "KrDZGp2012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 260,
        "name": "KrDZGp3011Zr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 261, "name": "KrDZIa3011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 262,
        "name": "KrDZIa3012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 263, "name": "KrDZIs1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 264,
        "name": "KrDZIs1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 265, "name": "KrDZIs1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 266,
        "name": "KrDZIs1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 267, "name": "KrDZIs1015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 268,
        "name": "KrDZIs2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 269, "name": "KrDZIs2012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 270,
        "name": "KrDZIs2013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 271, "name": "KrDZIs2014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 272,
        "name": "KrDZIs3011Io",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 273, "name": "KrDZIs3011Si", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 274,
        "name": "KrDZIs3012Io",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 275, "name": "KrDZIs3012Si", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 276,
        "name": "KrDZMg1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 277, "name": "KrDZMg1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 278,
        "name": "KrDZMg1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 279, "name": "KrDZMg1014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 280,
        "name": "KrDZMg1021",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 281, "name": "KrDZMg1022", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 282,
        "name": "KrDZMg1023",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 283, "name": "KrDZMg1024", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 284,
        "name": "KrDZMg2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 285, "name": "KrDZMg2012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 286,
        "name": "KrDZMg2013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 287, "name": "KrDZMg2014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 288,
        "name": "KrDZMg2015",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 289, "name": "KrDZMg2016", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 290,
        "name": "KrDZMg3001Eb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 291, "name": "KrDZMg3001Hz", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 292,
        "name": "KrDZMg3001Lm",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 293, "name": "KrDZMg3002Hz", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 294,
        "name": "KrDZMr1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 295, "name": "KrDZMr1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 296,
        "name": "KrDZMr1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 297, "name": "KrDZRc1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 298,
        "name": "KrDZRc1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 299, "name": "KrDZRc1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 300,
        "name": "KrDZRc1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 301, "name": "KrDZRc1015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 302,
        "name": "KrDZRc1021",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 303, "name": "KrDZRc1022", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 304,
        "name": "KrDZRc1023",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 305, "name": "KrDZRc1024", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 306,
        "name": "KrDZRc1025",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 307, "name": "KrDZRc2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 308,
        "name": "KrDZRc2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 309, "name": "KrDZRc2013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 310,
        "name": "KrDZRc2014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 311, "name": "KrDZRc2021", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 312,
        "name": "KrDZRc2022",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 313, "name": "KrDZRc2023", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 314,
        "name": "KrDZRc2024",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 315, "name": "KrDZRc3011Co", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 316,
        "name": "KrDZRc3011Ra",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 317, "name": "KrDZRc3012Co", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 318,
        "name": "KrDZRc3012Ra",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 319, "name": "KrDZRc3013Co", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 320,
        "name": "KrDZRc3013Ra",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 321, "name": "KrDZSc1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 322,
        "name": "KrDZSc1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 323, "name": "KrDZSc2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 324,
        "name": "KrDZSc2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 325, "name": "KrDZSc3001Ps", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 326,
        "name": "KrDZSc3001Si",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 327, "name": "KrDZSm1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 328,
        "name": "KrDZSm1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 329, "name": "KrDZSm1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 330,
        "name": "KrDZSm1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 331, "name": "KrDZSm2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 332,
        "name": "KrDZSm2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 333, "name": "KrDZSm2013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 334,
        "name": "KrDZSm2014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 335, "name": "KrDZSm2015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 336,
        "name": "KrDZSm3001Pk",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 337, "name": "KrDZSm3001Sw", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 338,
        "name": "KrDZSm3002Pk",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 339, "name": "KrDZTo1011a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 340,
        "name": "KrDZTo1011b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 341, "name": "KrDZTo1012a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 342,
        "name": "KrDZTo1012b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 343, "name": "KrDZTo1013a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 344,
        "name": "KrDZTo1013b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 345, "name": "KrDZTo1014a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 346,
        "name": "KrDZTo1014b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 347, "name": "KrDZTo1015a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 348,
        "name": "KrDZTo1015b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 349, "name": "KrDZTo1016a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 350,
        "name": "KrDZTo1016b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 351, "name": "KrDZTo2011a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 352,
        "name": "KrDZTo2011b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 353, "name": "KrDZTo2012a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 354,
        "name": "KrDZTo2012b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 355, "name": "KrDZTo2013a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 356,
        "name": "KrDZTo2013b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 357, "name": "KrDZTo2014a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 358,
        "name": "KrDZTo2014b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 359, "name": "KrDZTo3011Ma", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 360,
        "name": "KrDZTo3011Mb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 361, "name": "KrDZTo3011Za", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 362,
        "name": "KrDZTo3011Zb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 363, "name": "KrDZTo3012Ma", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 364,
        "name": "KrDZTo3012Za",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 365, "name": "KrDZTo3012Zb", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 366,
        "name": "KrDZTo3013Za",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 367, "name": "KrDZTo4011Ha", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 368,
        "name": "KrDZTo4011Hb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 369, "name": "KrDZTo4011Ma", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 370,
        "name": "KrDZTo4011Mb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 371, "name": "KrDZTo4011Za", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 372,
        "name": "KrDZTo4011Zb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 373, "name": "KrDZTo4012Za", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 374,
        "name": "KrDZTo4012Zb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 375, "name": "KrDZTr1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 376,
        "name": "KrDZTr1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 377, "name": "KrDZTr1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 378,
        "name": "KrDZTr1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 379, "name": "KrDZTr2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 380,
        "name": "KrDZTr2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 381, "name": "KrDZTr2013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 382,
        "name": "KrDZTr2014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 383, "name": "KrDZTr3011Hg", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 384,
        "name": "KrDZTr3011Tm",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 385, "name": "KrDZTr3012Tm", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 386,
        "name": "KrDZZa1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 387, "name": "KrDZZa1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 388,
        "name": "KrDZZa1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 389, "name": "KrDZZa1014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 390,
        "name": "KrDZZa1021",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 391, "name": "KrDZZa1022", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 392,
        "name": "KrDZZa1023",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 393, "name": "KrDZZa2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 394,
        "name": "KrDZZa2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 395, "name": "KrDZZa2013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 396,
        "name": "KrDZZa2014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 397, "name": "KrDZZa2015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 398,
        "name": "KrDZZa3011Ma",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 399, "name": "KrDZZa3011Zf", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 400,
        "name": "KrDZZa3011Zz",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 401, "name": "KrDZZI1011a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 402,
        "name": "KrDZZI1011b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 403, "name": "KrDZZI1012a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 404,
        "name": "KrDZZI1012b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 405, "name": "KrDZZI1013a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 406,
        "name": "KrDZZI1013b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 407, "name": "KrDZZI2011a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 408,
        "name": "KrDZZI2011b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 409, "name": "KrDZZI2012a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 410,
        "name": "KrDZZI2012b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 411, "name": "KrDZZI3011a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 412,
        "name": "KrDZZI3011b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 413, "name": "KrDZZI3012a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 414,
        "name": "KrDZZI3012b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 415, "name": "KrDZZI4011a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 416,
        "name": "KrDZZI4011b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 417, "name": "KrDZZI4012a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 418,
        "name": "KrDZZI4012b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 419, "name": "KrZUEk1211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 420,
        "name": "KrZUEk1212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 421, "name": "KrZUEk1213", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 422,
        "name": "KrZUEk3211Em",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 423, "name": "KrZUEk3211Gn", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 424,
        "name": "KrZUEk3211Pi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 425, "name": "KrZUEk3211Zd", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 426,
        "name": "KrZUEk3212Gn",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 427, "name": "KrZUFr1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 428,
        "name": "KrZUFr1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 429, "name": "KrZUFr1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 430,
        "name": "KrZUFr1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 431, "name": "KrZUFr1015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 432,
        "name": "KrZUFr1021",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 433, "name": "KrZUFr1022", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 434,
        "name": "KrZUFr1023",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 435, "name": "KrZUFr1024", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 436,
        "name": "KrZUFr1025",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 437, "name": "KrZUFr1031", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 438,
        "name": "KrZUFr1032",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 439, "name": "KrZUFr1033", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 440,
        "name": "KrZUFr1034",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 441, "name": "KrZUFr2201", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 442,
        "name": "KrZUFr2202",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 443, "name": "KrZUFr3011Di", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 444,
        "name": "KrZUFr3011Dp",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 445, "name": "KrZUFr3011Fa", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 446,
        "name": "KrZUFr3011Fd",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 447, "name": "KrZUFr3011Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 448,
        "name": "KrZUFr3012Dp",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 449, "name": "KrZUFr3012Fa", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 450,
        "name": "KrZUFr3012Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 451, "name": "KrZUFr3013Fa", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 452,
        "name": "KrZUFr3013Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 453, "name": "KrZUFr3014Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 454,
        "name": "KrZUFr3021Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 455, "name": "KrZUFr3022Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 456,
        "name": "KrZUFr3023Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 457, "name": "KrZUFr3024Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 458,
        "name": "KrZUFr3031Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 459, "name": "KrZUFr3032Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 460,
        "name": "KrZUFr3033Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 461, "name": "KrZUFr3034Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 462,
        "name": "KrZUFr4201Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 463, "name": "KrZUFr4202Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 464,
        "name": "KrZUFr4203Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 465, "name": "KrZUGa1211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 466,
        "name": "KrZUGa1212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 467, "name": "KrZUGa3211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 468,
        "name": "KrZUGa3212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 469, "name": "KrZUIs1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 470,
        "name": "KrZUIs3011Si",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 471, "name": "KrZUMg1211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 472,
        "name": "KrZUMg1212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 473, "name": "KrZUMg3211Eb", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 474,
        "name": "KrZUMg3211Hz",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 475, "name": "KrZUMr1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 476,
        "name": "KrZUMr1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 477, "name": "KrZURc1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 478,
        "name": "KrZURc1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 479, "name": "KrZURc1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 480,
        "name": "KrZURc1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 481, "name": "KrZURc3011Co", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 482,
        "name": "KrZURc3011Ra",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 483, "name": "KrZURc3012Ra", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 484,
        "name": "KrZURc3013Ra",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 485, "name": "KrZURc3021Co", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 486,
        "name": "KrZURc3021Ra",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 487, "name": "KrZUSm3211Sw", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 488,
        "name": "KrZUTr3011Hg",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 489, "name": "KrZUZa1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 490,
        "name": "KrZUZa1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 491, "name": "KrZUZa1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 492,
        "name": "KrZUZa1014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 493, "name": "KrZUZa2001", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 494,
        "name": "KrZUZa3011Zf",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 495, "name": "KrZUZa3011Zp", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 496,
        "name": "KrZUZa3011Zz",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 497, "name": "KrZUZa3012Zz", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 498,
        "name": "KrZUZa4001Zz",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 499, "name": "KrZUZa4002Zz", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 500,
        "name": "KrZZAd1211",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 501, "name": "KrZZAd2211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 502,
        "name": "KrZZAd2212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 503, "name": "KrZZAd3211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 504,
        "name": "KrZZAd3212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 505, "name": "KrZZAd3213", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 506,
        "name": "KrZZEk1211",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 507, "name": "KrZZEk1212", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 508,
        "name": "KrZZEk1213",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 509, "name": "KrZZEk2211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 510,
        "name": "KrZZEk2212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 511, "name": "KrZZEk2213", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 512,
        "name": "KrZZEk3211Em",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 513, "name": "KrZZEk3211Gn", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 514,
        "name": "KrZZEk3211Pi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 515, "name": "KrZZFr1211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 516,
        "name": "KrZZFr1212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 517, "name": "KrZZFr1213", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 518,
        "name": "KrZZFr1214",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 519, "name": "KrZZFr1215", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 520,
        "name": "KrZZFr1221",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 521, "name": "KrZZFr1222", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 522,
        "name": "KrZZFr1223",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 523, "name": "KrZZFr1224", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 524,
        "name": "KrZZFr1225",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 525, "name": "KrZZFr2111", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 526,
        "name": "KrZZFr2112",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 527, "name": "KrZZFr2211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 528,
        "name": "KrZZFr2212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 529, "name": "KrZZFr2213", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 530,
        "name": "KrZZFr2214",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 531, "name": "KrZZFr2215", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 532,
        "name": "KrZZFr2221",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 533, "name": "KrZZFr2222", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 534,
        "name": "KrZZFr2223",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 535, "name": "KrZZFr2224", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 536,
        "name": "KrZZFr2225",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 537, "name": "KrZZFr3111Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 538,
        "name": "KrZZFr3211Bk",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 539, "name": "KrZZFr3211Rn", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 540,
        "name": "KrZZFr3211Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 541, "name": "KrZZFr3212Bk", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 542,
        "name": "KrZZFr3212Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 543, "name": "KrZZFr3213Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 544,
        "name": "KrZZFr3214Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 545, "name": "KrZZFr3221Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 546,
        "name": "KrZZFr3222Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 547, "name": "KrZZFr3223Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 548,
        "name": "KrZZGi1211",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 549, "name": "KrZZGi2211a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 550,
        "name": "KrZZGi2211b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 551, "name": "KrZZGi3211Ip", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 552,
        "name": "KrZZGi3211Tt",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 553, "name": "KrZZGi3212Ip", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 554,
        "name": "KrZZGi3212Tt",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 555, "name": "KrZZGi3213Ip", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 556,
        "name": "KrZZGi3213Tt",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 557, "name": "KrZZIs1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 558,
        "name": "KrZZIs1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 559, "name": "KrZZIs1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 560,
        "name": "KrZZIs2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 561, "name": "KrZZIs3011Io", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 562,
        "name": "KrZZIs3011Si",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 563, "name": "KrZZIs3012Io", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 564,
        "name": "KrZZIs3012Si",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 565, "name": "KrZZMg1211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 566,
        "name": "KrZZMg1212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 567, "name": "KrZZMg2211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 568,
        "name": "KrZZMg2212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 569, "name": "KrZZMg2213", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 570,
        "name": "KrZZMg3211Hz",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 571, "name": "KrZZMg3211Lm", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 572,
        "name": "KrZZMr1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 573, "name": "KrZZMr1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 574,
        "name": "KrZZMr1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 575, "name": "KrZZRc1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 576,
        "name": "KrZZRc1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 577, "name": "KrZZRc1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 578,
        "name": "KrZZRc2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 579, "name": "KrZZRc2012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 580,
        "name": "KrZZRc2013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 581, "name": "KrZZRc2014", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 582,
        "name": "KrZZRc3011Co",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 583, "name": "KrZZRc3011Ra", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 584,
        "name": "KrZZRc3012Co",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 585, "name": "KrZZRc3012Ra", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 586,
        "name": "KrZZSm2211",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 587, "name": "KrZZSm3211Sw", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 588,
        "name": "KrZZTo1011a",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 589, "name": "KrZZTo1011b", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 590,
        "name": "KrZZTo2011a",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 591, "name": "KrZZTo3011Ha", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 592,
        "name": "KrZZTo3011Za",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 593, "name": "KrZZTo4011Za", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 594,
        "name": "KrZZTo4011Zb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 595, "name": "KrZZTr1011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 596,
        "name": "KrZZTr1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 597, "name": "KrZZTr2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 598,
        "name": "KrZZTr2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 599, "name": "KrZZTr3011Hg", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 600,
        "name": "KrZZTr3011Tm",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 601, "name": "KrZZTr3012Hg", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 602,
        "name": "KrZZZa1011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 603, "name": "KrZZZa1012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 604,
        "name": "KrZZZa1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 605, "name": "KrZZZa2011", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 606,
        "name": "KrZZZa2012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 607, "name": "KrZZZa2013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 608,
        "name": "KrZZZa3011Zf",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 609, "name": "KrZZZa3011Zp", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 610,
        "name": "KrZZZa3011Zz",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 611, "name": "KrZZZI1011a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 612,
        "name": "KrZZZI1011b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 613, "name": "KrZZZI2011a", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 614,
        "name": "KrZZZI2011b",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 615, "name": "KrZZZI3011a", "type": 1, "type_name": "Grupa dziekańska"},

        {"id": 616, "name": "KrZZZI3011b", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 617,
        "name": "KrZZZI4011a",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 618, "name": "KrZZZI4011b", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 619,
        "name": "KSB Anal rynk fin i dor inw A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 620, "name": "KSB Bankowość A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 621,
        "name": "KSB Controlling i fin przeds A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 622, "name": "KSB Europ studia menedżer A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 623,
        "name": "KSB Europ studia menedżer C",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 624, "name": "KSB Europ studia menedżer G", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 625,
        "name": "KSB Handel i zarządz sprzedażą",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 626, "name": "KSB Handel międzynarodowy A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 627,
        "name": "KSB International MBA IX",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 628, "name": "KSB International MBA VII", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 629,
        "name": "KSB International MBA VIII",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 630, "name": "KSB Kadry i płace", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 631,
        "name": "KSB Krakowska Szkoła Biznesu",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 632, "name": "KSB Master of Busin Adm XIX", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 633,
        "name": "KSB Master of Busin Adm XVIII",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 634, "name": "KSB Master of Busin Adm XX", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 635,
        "name": "KSB MBA KSB Master ed. I",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 636, "name": "KSB MBA KSB Master ed. II", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 637,
        "name": "KSB MCHE - pilotaż  Technika",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 638, "name": "KSB MCHE - pilotaż Licea", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 639,
        "name": "KSB NBPMechFunStreEuro VI",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 640, "name": "KSB Psychologia w biznesie A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 641,
        "name": "KSB Rach i fin dla pocz A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 642, "name": "KSB Rach i fin dla pocz B", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 643,
        "name": "KSB Rach i fin dla pocz C",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 644, "name": "KSB Rach i fin dla zaaw A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 645,
        "name": "KSB Rach i fin dla zaaw B",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 646, "name": "KSB Rach i spr wg MSR i MSSF A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 647,
        "name": "KSB Szkolenie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 648, "name": "KSB Zarz przeds- stud menedż A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 649,
        "name": "KSB Zarz sferą usług med",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 650, "name": "KSB Zarządzanie projektami A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 651,
        "name": "KSB Zarządzanie projektami B",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 652, "name": "NtZZFr1001", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 653,
        "name": "NtZZFr1002",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 654, "name": "NtZZFr2001", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 655,
        "name": "NtZZFr2002",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 656, "name": "NtZZFr3001Fd", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 657,
        "name": "NtZZFr3001Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 658, "name": "NtZZZa3011Fr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 659,
        "name": "SJO- EFTA001A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 660, "name": "SJO-AdA006B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 661,
        "name": "SJO-AdA020A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 662, "name": "SJO-AdA020B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 663,
        "name": "SJO-AdA045B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 664, "name": "SJO-AdA083B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 665,
        "name": "SJO-AdA209B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 666, "name": "SJO-AdA220B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 667,
        "name": "SJO-AdA245B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 668, "name": "SJO-AdA249B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 669,
        "name": "SJO-AdA309B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 670, "name": "SJO-AdA349B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 671,
        "name": "SJO-AdH012A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 672, "name": "SJO-AdH312A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 673,
        "name": "SJO-AdN007A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 674, "name": "SJO-AdN207A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 675,
        "name": "SJO-AdW006A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 676, "name": "SJO-AdW206A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 677,
        "name": "SJO-AgA016B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 678, "name": "SJO-AgA019B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 679,
        "name": "SJO-AgA090B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 680, "name": "SJO-AgA216B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 681,
        "name": "SJO-AgA219B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 682, "name": "SJO-AgA244B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 683,
        "name": "SJO-AgA272B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 684, "name": "SJO-AgA287B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 685,
        "name": "SJO-AgA290B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 686, "name": "SJO-AgA336B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 687,
        "name": "SJO-AgA372B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 688, "name": "SJO-AgA390B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 689,
        "name": "SJO-AgF001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 690, "name": "SJO-AgH001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 691,
        "name": "SJO-AgH201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 692, "name": "SJO-AgN006A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 693,
        "name": "SJO-AgN046A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 694, "name": "SJO-AgN206A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 695,
        "name": "SJO-AgN246A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 696, "name": "SJO-AgN306A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 697,
        "name": "SJO-AgN335A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 698, "name": "SJO-AgR001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 699,
        "name": "SJO-AgW017A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 700, "name": "SJO-AgW217A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 701,
        "name": "SJO-CfA050B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 702, "name": "SJO-DUEkA001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 703,
        "name": "SJO-DUEkA001C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 704, "name": "SJO-DUEkA002C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 705,
        "name": "SJO-DUEkA010B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 706, "name": "SJO-DUEkA014B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 707,
        "name": "SJO-DUEkA015A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 708, "name": "SJO-DUEkA016A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 709,
        "name": "SJO-DUEkA019B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 710, "name": "SJO-DUEkA028B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 711,
        "name": "SJO-DUEkA031B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 712, "name": "SJO-DUEkA038B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 713,
        "name": "SJO-DUEkA043B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 714, "name": "SJO-DUEkA101A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 715,
        "name": "SJO-DUEkA101B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 716, "name": "SJO-DUEkN001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 717,
        "name": "SJO-DUEkN006B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 718, "name": "SJO-DUEkN010A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 719,
        "name": "SJO-DUEkN011A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 720, "name": "SJO-DUEkN012A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 721,
        "name": "SJO-DUEkN014B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 722, "name": "SJO-DUEkN015B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 723,
        "name": "SJO-DUEkW069A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 724, "name": "SJO-DUEpA008B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 725,
        "name": "SJO-DUEpkA201A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 726, "name": "SJO-DUEpKA202B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 727,
        "name": "SJO-DUEpkA203B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 728, "name": "SJO-DUEpKA211B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 729,
        "name": "SJO-DUEpKA212B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 730, "name": "SJO-DUFrA002B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 731,
        "name": "SJO-DUFrA006B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 732, "name": "SJO-DUFrA007C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 733,
        "name": "SJO-DUFrA008C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 734, "name": "SJO-DUFRA009C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 735,
        "name": "SJO-DUFrA017B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 736, "name": "SJO-DUFrA024B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 737,
        "name": "SJO-DUFrA026B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 738, "name": "SJO-DUFrA033B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 739,
        "name": "SJO-DUFrA037B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 740, "name": "SJO-DUFrA039B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 741,
        "name": "SJO-DUFrA041B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 742, "name": "SJO-DUFrA051B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 743,
        "name": "SJO-DUFrN001A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 744, "name": "SJO-DUFrN003B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 745,
        "name": "SJO-DUFrN006B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 746, "name": "SJO-DUFrN008A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 747,
        "name": "SJO-DUFrN009A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 748, "name": "SJO-DUFrN012B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 749,
        "name": "SJO-DUFrN052A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 750, "name": "SJO-DUFrR010B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 751,
        "name": "SJO-DUGaA012B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 752, "name": "SJO-DUGaA015B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 753,
        "name": "SJO-DUGaA023C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 754, "name": "SJO-DUGaA025B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 755,
        "name": "SJO-DUGaA029B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 756, "name": "SJO-DUGpA030B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 757,
        "name": "SJO-DUIeA032B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 758, "name": "SJO-DUIeA033B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 759,
        "name": "SJO-DUIeN002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 760, "name": "SJO-DUMaA011B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 761,
        "name": "SJO-DUMaA028C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 762, "name": "SJO-DUMaA029C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 763,
        "name": "SJO-DUMgA012A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 764, "name": "SJO-DUMgA013B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 765,
        "name": "SJO-DUMgA015B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 766, "name": "SJO-DUMgA026B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 767,
        "name": "SJO-DUMgA032C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 768, "name": "SJO-DUMgA033C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 769,
        "name": "SJO-DUMgA036B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 770, "name": "SJO-DUMWF024A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 771,
        "name": "SJO-DUMWF066A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 772, "name": "SJO-DUMWF099B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 773,
        "name": "SJO-DUMWH011A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 774, "name": "SJO-DUMWH015B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 775,
        "name": "SJO-DUMWH050A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 776, "name": "SJO-DUMWH060A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 777,
        "name": "SJO-DUMWH070A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 778, "name": "SJO-DUMWN005A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 779,
        "name": "SJO-DUMWN015B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 780, "name": "SJO-DUMWR055A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 781,
        "name": "SJO-DUMWR077A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 782, "name": "SJO-DUMWW010A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 783,
        "name": "SJO-DUMWW015A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 784, "name": "SJO-DURcA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 785,
        "name": "SJO-DURcA005A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 786, "name": "SJO-DURcA009B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 787,
        "name": "SJO-DURcA010B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 788, "name": "SJO-DURcA012B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 789,
        "name": "SJO-DURcA012B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 790, "name": "SJO-DURcA018C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 791,
        "name": "SJO-DUSmA001C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 792, "name": "SJO-DUSmA003C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 793,
        "name": "SJO-DUSmA011B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 794, "name": "SJO-DUSmA022B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 795,
        "name": "SJO-DUSmA029B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 796, "name": "SJO-DUSmA036B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 797,
        "name": "SJO-DUSmA042B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 798, "name": "SJO-DUToA004B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 799,
        "name": "SJO-DUToA005B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 800, "name": "SJO-DUToA012B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 801,
        "name": "SJO-DUToA019C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 802, "name": "SJO-DUToA020B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 803,
        "name": "SJO-DUToA205B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 804, "name": "SJO-DUToA209A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 805,
        "name": "SJO-DUToH001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 806, "name": "SJO-DUToH077A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 807,
        "name": "SJO-DUToH201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 808, "name": "SJO-DUToN001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 809,
        "name": "SJO-DUToN015A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 810, "name": "SJO-DUToN201A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 811,
        "name": "SJO-DUTrA003B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 812, "name": "SJO-DUTRA007A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 813,
        "name": "SJO-DUTrA016C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 814, "name": "SJO-DUTrA017B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 815,
        "name": "SJO-DUTrA024B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 816, "name": "SJO-DUZaA004A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 817,
        "name": "SJO-DUZaA007B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 818, "name": "SJO-DUZaA009B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 819,
        "name": "SJO-DUZaA011B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 820, "name": "SJO-DUZaA016B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 821,
        "name": "SJO-DUZaA020B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 822, "name": "SJO-DUZaA029B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 823,
        "name": "SJO-DUZaA034B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 824, "name": "SJO-DUZaA035B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 825,
        "name": "SJO-DUZaA038B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 826, "name": "SJO-DUZaA040B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 827,
        "name": "SJO-DUZaA041B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 828, "name": "SJO-DUZaA046C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 829,
        "name": "SJO-DUZaA048C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 830, "name": "SJO-DUZaA063B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 831,
        "name": "SJO-DUZaF007A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 832, "name": "SJO-DUZaF009A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 833,
        "name": "SJO-DUZAH020A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 834, "name": "SJO-DUZAH070A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 835,
        "name": "SJO-DUZaN002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 836, "name": "SJO-DUZaN003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 837,
        "name": "SJO-DUZaN007A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 838, "name": "SJO-DUZaN011A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 839,
        "name": "SJO-DUZaN021B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 840, "name": "SJO-DUZaN088A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 841,
        "name": "SJO-DUZAW017A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 842, "name": "SJO-EFTA201A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 843,
        "name": "SJO-EFTA309C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 844, "name": "SJO-EFTZA202A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 845,
        "name": "SJO-EFTZF001B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 846, "name": "SJO-EFTZF003B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 847,
        "name": "SJO-EFTZF026A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 848, "name": "SJO-EFTZF101B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 849,
        "name": "SJO-EFTZF201B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 850, "name": "SJO-EFTZF203B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 851,
        "name": "SJO-EFTZF226A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 852, "name": "SJO-EFTZF226B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 853,
        "name": "SJO-EFTZF228B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 854, "name": "SJO-EFTZF326B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 855,
        "name": "SJO-EFTZF328B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 856, "name": "SJO-EFTZF349B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 857,
        "name": "SJO-EFTZH037A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 858, "name": "SJO-EFTZH038B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 859,
        "name": "SJO-EFTZH202B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 860, "name": "SJO-EFTZH237A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 861,
        "name": "SJO-EFTZH238B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 862, "name": "SJO-EFTZH238B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 863,
        "name": "SJO-EFTZH302B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 864, "name": "SJO-EFTZH336A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 865,
        "name": "SJO-EFTZH337A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 866, "name": "SJO-EFTZH338B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 867,
        "name": "SJO-EFTZH345B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 868, "name": "SJO-EFTZN325B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 869,
        "name": "SJO-EFTZN351B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 870, "name": "SJO-EFTZN352B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 871,
        "name": "SJO-EFTZR221A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 872, "name": "SJO-EFTZR239B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 873,
        "name": "SJO-EFTZR312A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 874, "name": "SJO-EFTZR321A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 875,
        "name": "SJO-EFTZR339B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 876, "name": "SJO-EFTZW023A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 877,
        "name": "SJO-EFTZW024A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 878, "name": "SJO-EFTZW025A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 879,
        "name": "SJO-EFTZW223A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 880, "name": "SJO-EFTZW224A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 881,
        "name": "SJO-EFTZW323A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 882, "name": "SJO-EFTZW324A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 883,
        "name": "SJO-EFZF101B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 884, "name": "SJO-EFZF339B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 885,
        "name": "SJO-EFZN378B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 886, "name": "SJO-EkA001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 887,
        "name": "SJO-EkA001C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 888, "name": "SJO-EkA004B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 889,
        "name": "SJO-EkA009A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 890, "name": "SJO-EkA018A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 891,
        "name": "SJO-EkA020A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 892, "name": "SJO-EkA022B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 893,
        "name": "SJO-EkA026B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 894, "name": "SJO-EkA031B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 895,
        "name": "SJO-EkA031B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 896, "name": "SJO-EkA037B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 897,
        "name": "SJO-EkA038A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 898, "name": "SJO-EkA042B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 899,
        "name": "SJO-EkA049B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 900, "name": "SJO-EkA050B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 901,
        "name": "SJO-EkA057B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 902, "name": "SJO-EkA062B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 903,
        "name": "SJO-EkA066B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 904, "name": "SJO-EkA072C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 905,
        "name": "SJO-EkA201B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 906, "name": "SJO-EkA202A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 907,
        "name": "SJO-EkA204B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 908, "name": "SJO-EkA209/A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 909,
        "name": "SJO-EkA209B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 910, "name": "SJO-EkA218A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 911,
        "name": "SJO-EkA220A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 912, "name": "SJO-EkA222B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 913,
        "name": "SJO-EkA230B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 914, "name": "SJO-EkA231B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 915,
        "name": "SJO-EkA233B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 916, "name": "SJO-EkA237B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 917,
        "name": "SJO-EkA242B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 918, "name": "SJO-EKA249B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 919,
        "name": "SJO-EkA249B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 920, "name": "SJO-EkA250B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 921,
        "name": "SJO-EkA257B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 922, "name": "SJO-EkA266B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 923,
        "name": "SJO-EkA272C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 924, "name": "SJO-EkA283B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 925,
        "name": "SJO-EkA300C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 926, "name": "SJO-EkA307B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 927,
        "name": "SJO-EkA308B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 928, "name": "SJO-EkA318A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 929,
        "name": "SJO-EkA326B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 930, "name": "SJO-EkA333B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 931,
        "name": "SJO-EkA337B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 932, "name": "SJO-EkA342B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 933,
        "name": "SJO-EkA348B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 934, "name": "SJO-EkA349B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 935,
        "name": "SJO-EkA354B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 936, "name": "SJO-EkA357B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 937,
        "name": "SJO-EkA362B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 938, "name": "SJO-EkA366B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 939,
        "name": "SJO-EkA369B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 940, "name": "SJO-EkA372C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 941,
        "name": "SJO-EkA383B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 942, "name": "SJO-EkA394B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 943,
        "name": "SJO-EkF004A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 944, "name": "SJO-EkF005A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 945,
        "name": "SJO-EkF009A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 946, "name": "SJO-EkF013A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 947,
        "name": "SJO-EkF034A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 948, "name": "SJO-EkF204A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 949,
        "name": "SJO-EkF209A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 950, "name": "SJO-EkF213A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 951,
        "name": "SJO-EkF234A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 952, "name": "SJO-EkF304A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 953,
        "name": "SJO-EkF309A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 954, "name": "SJO-EkF312A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 955,
        "name": "SJO-EkH001A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 956, "name": "SJO-EkH002A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 957,
        "name": "SJO-EkH011A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 958, "name": "SJO-EkH014A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 959,
        "name": "SJO-EkH021A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 960, "name": "SJO-EkH027A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 961,
        "name": "SJO-EkH201A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 962, "name": "SJO-EKH202A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 963,
        "name": "SJO-EkH211A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 964, "name": "SJO-EkH214A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 965,
        "name": "SJO-EkH221A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 966, "name": "SJO-EkH227A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 967,
        "name": "SJO-EkH311A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 968, "name": "SJO-EkH321A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 969,
        "name": "SJO-EkN003A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 970, "name": "SJO-EkN023A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 971,
        "name": "SJO-EkN024A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 972, "name": "SJO-EkN025A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 973,
        "name": "SJO-EkN026A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 974, "name": "SJO-EkN030A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 975,
        "name": "SJO-EkN040A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 976, "name": "SJO-EkN050A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 977,
        "name": "SJO-EkN051A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 978, "name": "SJO-EkN052A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 979,
        "name": "SJO-EkN055B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 980, "name": "SJO-EkN063B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 981,
        "name": "SJO-EkN203A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 982, "name": "SJO-EkN223A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 983,
        "name": "SJO-EkN224A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 984, "name": "SJO-EkN225A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 985,
        "name": "SJO-EkN226A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 986, "name": "SJO-EkN230A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 987,
        "name": "SJO-EKN240A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 988, "name": "SJO-EkN250A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 989,
        "name": "SJO-EkN251A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 990, "name": "SJO-EkN252A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 991,
        "name": "SJO-EkN255B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 992, "name": "SJO-EkN263B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 993,
        "name": "SJO-EkN275B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 994, "name": "SJO-EkN303A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 995,
        "name": "SJO-EkN323A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 996, "name": "SJO-EkN324A1", "type": 1, "type_name": "Grupa dziekańska"},
        {"id": 997, "name": "SJO-EkN325A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 998,
        "name": "SJO-EkN327A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 999, "name": "SJO-EkN330A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1000,
        "name": "SJO-EkN340A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1001, "name": "SJO-EkN350A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1002,
        "name": "SJO-EkN351A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1003, "name": "SJO-EkN355B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1004,
        "name": "SJO-EkN363B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1005, "name": "SJO-EkN375B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1006,
        "name": "SJO-EkR006A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1007, "name": "SJO-EkR012A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1008,
        "name": "SJO-EkR206A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1009, "name": "SJO-EkR212A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1010,
        "name": "SJO-EkR306A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1011, "name": "SJO-EkR312A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1012,
        "name": "SJO-EkR327A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1013, "name": "SJO-EkW005A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1014,
        "name": "SJO-EkW007A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1015, "name": "SJO-EkW204A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1016,
        "name": "SJO-EkW207A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1017, "name": "SJO-EkW304A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1018,
        "name": "SJO-EkW305A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1019, "name": "SJO-EkW307A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1020,
        "name": "SJO-EpA001B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1021, "name": "SJO-EpA007B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1022,
        "name": "SJO-EpA039B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1023, "name": "SJO-EpA207A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1024,
        "name": "SJO-EpA207B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1025, "name": "SJO-EpA231B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1026,
        "name": "SJO-EpA239B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1027, "name": "SJO-EpA266B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1028,
        "name": "SJO-EpA307A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1029, "name": "SJO-EpA339B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1030,
        "name": "SJO-EpA347B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1031, "name": "SJO-EpA366B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1032,
        "name": "SJO-EpH206A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1033, "name": "SJO-EpH306A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1034,
        "name": "SJO-EpkA301A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1035, "name": "SJO-EpKA302B1 ", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1036,
        "name": "SJO-EpKA303B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1037, "name": "SJO-EpKA304B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1038,
        "name": "SJO-EpKA305B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1039, "name": "SJO-EpKH301A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1040,
        "name": "SJO-EpKN308A1 ",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1041, "name": "SJO-EpKN314A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1042,
        "name": "SJO-EpKN315A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1043, "name": "SJO-EpKR303A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1044,
        "name": "SJO-EpKW300A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1045, "name": "SJO-EpKW307A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1046,
        "name": "SJO-EpN005A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1047, "name": "SJO-EpN205A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1048,
        "name": "SJO-EpN227A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1049, "name": "SJO-EpN327A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1050,
        "name": "SJO-ETF325A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1051, "name": "SJO-ETZN270B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1052,
        "name": "SJO-ETZN361B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1053, "name": "SJO-ETZN370B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1054,
        "name": "SJO-FrA001B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1055, "name": "SJO-FrA002B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1056,
        "name": "SJO-FrA005C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1057, "name": "SJO-FrA014B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1058,
        "name": "SJO-FrA017A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1059, "name": "SJO-FrA020B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1060,
        "name": "SJO-FrA022B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1061, "name": "SJO-FrA024A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1062,
        "name": "SJO-FrA025C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1063, "name": "SJO-FrA026C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1064,
        "name": "SJO-FrA027B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1065, "name": "SJO-FrA034B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1066,
        "name": "SJO-FrA036B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1067, "name": "SJO-FrA043B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1068,
        "name": "SJO-FrA044B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1069, "name": "SJO-FrA045B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1070,
        "name": "SJO-FrA049B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1071, "name": "SJO-FrA050B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1072,
        "name": "SJO-FrA051B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1073, "name": "SJO-FrA059B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1074,
        "name": "SJO-FrA061B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1075, "name": "SJO-FrA067B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1076,
        "name": "SJO-FrA073C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1077, "name": "SJO-FrA074C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1078,
        "name": "SJO-FrA092B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1079, "name": "SJO-FrA093C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1080,
        "name": "SJO-FrA201B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1081, "name": "SJO-FrA202B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1082,
        "name": "SJO-FrA205B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1083, "name": "SJO-FrA214B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1084,
        "name": "SJO-FrA218B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1085, "name": "SJO-FrA220B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1086,
        "name": "SJO-FrA222B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1087, "name": "SJO-FrA225C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1088,
        "name": "SJO-FrA227B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1089, "name": "SJO-FrA236B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1090,
        "name": "SJO-FrA243B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1091, "name": "SJO-FrA244B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1092,
        "name": "SJO-FrA245B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1093, "name": "SJO-FrA249B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1094,
        "name": "SJO-FrA250B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1095, "name": "SJO-FrA251B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1096,
        "name": "SJO-FrA259B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1097, "name": "SJO-FrA261B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1098,
        "name": "SJO-FrA267B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1099, "name": "SJO-FrA274C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1100,
        "name": "SJO-FrA292B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1101, "name": "SJO-FrA305B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1102,
        "name": "SJO-FrA305C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1103, "name": "SJO-FrA306C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1104,
        "name": "SJO-FrA318B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1105, "name": "SJO-FrA324B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1106,
        "name": "SJO-FrA325B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1107, "name": "SJO-FrA325C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1108,
        "name": "SJO-FrA327B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1109, "name": "SJO-FrA339B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1110,
        "name": "SJO-FrA344B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1111, "name": "SJO-FrA345B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1112,
        "name": "SJO-FrA350B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1113, "name": "SJO-FrA356B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1114,
        "name": "SJO-FrA359B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1115, "name": "SJO-FrA365B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1116,
        "name": "SJO-FrA367B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1117, "name": "SJO-FrA373B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1118,
        "name": "SJO-FrA374C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1119, "name": "SJO-FrA380B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1120,
        "name": "SJO-FrA393B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1121, "name": "SJO-FrA396B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1122,
        "name": "SJO-FrF001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1123, "name": "SJO-FrF008A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1124,
        "name": "SJO-FrF010A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1125, "name": "SJO-FrF201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1126,
        "name": "SJO-FrF208A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1127, "name": "SJO-FrF301A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1128,
        "name": "SJO-FrF310A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1129, "name": "SJO-FrF318A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1130,
        "name": "SJO-FrF329A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1131, "name": "SJO-FrH001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1132,
        "name": "SJO-FrH003A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1133, "name": "SJO-FrH012A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1134,
        "name": "SJO-FrH015A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1135, "name": "SJO-FrH016A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1136,
        "name": "SJO-FrH020A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1137, "name": "SJO-FrH215A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1138,
        "name": "SJO-FrH216A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1139, "name": "SJO-FrH220A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1140,
        "name": "SJO-FrH312A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1141, "name": "SJO-FrH315A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1142,
        "name": "SJO-FrH316A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1143, "name": "SJO-FrN002A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1144,
        "name": "SJO-FrN018A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1145, "name": "SJO-FrN019A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1146,
        "name": "SJO-FrN020A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1147, "name": "SJO-FrN022B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1148,
        "name": "SJO-FrN023B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1149, "name": "SJO-FrN027A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1150,
        "name": "SJO-FrN043A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1151, "name": "SJO-FrN047A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1152,
        "name": "SJO-FrN058A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1153, "name": "SJO-FrN064B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1154,
        "name": "SJO-FrN202A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1155, "name": "SJO-FrN218A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1156,
        "name": "SJO-FrN219A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1157, "name": "SJO-FrN220A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1158,
        "name": "SJO-FrN222B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1159, "name": "SJO-FrN223B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1160,
        "name": "SJO-FrN227A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1161, "name": "SJO-FrN243A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1162,
        "name": "SJO-FrN244A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1163, "name": "SJO-FrN258A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1164,
        "name": "SJO-FrN258A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1165, "name": "SJO-FrN318A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1166,
        "name": "SJO-FrN319A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1167, "name": "SJO-FrN320A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1168,
        "name": "SJO-FrN323B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1169, "name": "SJO-FrN326A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1170,
        "name": "SJO-FrN327A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1171, "name": "SJO-FrN327A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1172,
        "name": "SJO-FrN344A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1173, "name": "SJO-FrN347A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1174,
        "name": "SJO-FrN358A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1175, "name": "SJO-FrN364B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1176,
        "name": "SJO-FrR001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1177, "name": "SJO-FrR002A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1178,
        "name": "SJO-FrR011A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1179, "name": "SJO-FrR201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1180,
        "name": "SJO-FrR202A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1181, "name": "SJO-FrR211A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1182,
        "name": "SJO-FrR301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1183, "name": "SJO-FrW001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1184,
        "name": "SJO-FrW004A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1185, "name": "SJO-FrW005A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1186,
        "name": "SJO-FrW201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1187, "name": "SJO-FrW304A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1188,
        "name": "SJO-FrW310A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1189, "name": "SJO-FTA068C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1190,
        "name": "SJO-FTA268C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1191, "name": "SJO-FTF207A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1192,
        "name": "SJO-FTF307A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1193, "name": "SJO-FTZA302A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1194,
        "name": "SJO-FTZN261B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1195, "name": "SJO-FTZN361B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1196,
        "name": "SJO-FZA017A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1197, "name": "SJO-FZA217A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1198,
        "name": "SJO-GaA012A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1199, "name": "SJO-GaA017B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1200,
        "name": "SJO-GaA022A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1201, "name": "SJO-GaA022B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1202,
        "name": "SJO-GaA023A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1203, "name": "SJO-GaA025C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1204,
        "name": "SJO-GaA045B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1205, "name": "SJO-GaA048B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1206,
        "name": "SJO-GaA057B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1207, "name": "SJO-GaA063B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1208,
        "name": "SJO-GaA075C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1209, "name": "SJO-GaA212A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1210,
        "name": "SJO-GaA212B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1211, "name": "SJO-GaA217B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1212,
        "name": "SJO-GaA222B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1213, "name": "SJO-GaA234B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1214,
        "name": "SJO-GaA248B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1215, "name": "SJO-GaA257B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1216,
        "name": "SJO-GaA258B2 -e",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1217, "name": "SJO-GaA263B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1218,
        "name": "SJO-GaA275C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1219, "name": "SJO-GaA322B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1220,
        "name": "SJO-GaA334B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1221, "name": "SJO-GaA345B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1222,
        "name": "SJO-GaA358B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1223, "name": "SJO-GaA363B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1224,
        "name": "SJO-GaA381B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1225, "name": "SJO-GaF008A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1226,
        "name": "SJO-GaF011A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1227, "name": "SJO-GaF208A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1228,
        "name": "SJO-GaF211A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1229, "name": "SJO-GaF308A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1230,
        "name": "SJO-GaF311A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1231, "name": "SJO-GaH007A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1232,
        "name": "SJO-GaH015A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1233, "name": "SJO-GaH207A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1234,
        "name": "SJO-GaH215A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1235, "name": "SJO-GaH315A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1236,
        "name": "SJO-GaN003A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1237, "name": "SJO-GaN005A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1238,
        "name": "SJO-GaN038A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1239, "name": "SJO-GaN203A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1240,
        "name": "SJO-GaN205A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1241, "name": "SJO-GaN238A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1242,
        "name": "SJO-GaN303A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1243, "name": "SJO-GaN305A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1244,
        "name": "SJO-GaN338A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1245, "name": "SJO-GaR003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1246,
        "name": "SJO-GaR203A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1247, "name": "SJO-GaW007A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1248,
        "name": "SJO-GaW307A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1249, "name": "SJO-GiA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1250,
        "name": "SJO-GiA046B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1251, "name": "SJO-GiA241B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1252,
        "name": "SJO-GiA246B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1253, "name": "SJO-GiA346B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1254,
        "name": "SJO-GiF001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1255, "name": "SJO-GiF201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1256,
        "name": "SJO-GiF301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1257, "name": "SJO-GiH017A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1258,
        "name": "SJO-GiH217A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1259, "name": "SJO-GiH317A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1260,
        "name": "SJO-GiN001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1261, "name": "SJO-GiN201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1262,
        "name": "SJO-GiN241A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1263, "name": "SJO-GiN341A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1264,
        "name": "SJO-GiW001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1265, "name": "SJO-GiW201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1266,
        "name": "SJO-GpA001B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1267, "name": "SJO-GpA012B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1268,
        "name": "SJO-GpA030B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1269, "name": "SJO-GpA207B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1270,
        "name": "SJO-GpA208B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1271, "name": "SJO-GpA210A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1272,
        "name": "SJO-GpA212B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1273, "name": "SJO-GpA227B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1274,
        "name": "SJO-GpA230B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1275, "name": "SJO-GpA268B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1276,
        "name": "SJO-GpA292B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1277, "name": "SJO-GpA310A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1278,
        "name": "SJO-GpA341B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1279, "name": "SJO-GpA368B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1280,
        "name": "SJO-GpA392B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1281, "name": "SJO-GpF002A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1282,
        "name": "SJO-GPF202A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1283, "name": "SJO-GpH003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1284,
        "name": "SJO-GpH203A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1285, "name": "SJO-GpH303A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1286,
        "name": "SJO-GpN025B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1287, "name": "SJO-GpN026A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1288,
        "name": "SJO-GpR227A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1289, "name": "SJO-GpR327A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1290,
        "name": "SJO-GpW211A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1291, "name": "SJO-GpW311A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1292,
        "name": "SJO-IaA010 s.inf",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1293, "name": "SJO-IaA011 s.int", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1294,
        "name": "SJO-IaA028B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1295, "name": "SJO-IaA054B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1296,
        "name": "SJO-IaA067B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1297, "name": "SJO-IaA245B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1298,
        "name": "SJO-IaA254B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1299, "name": "SJO-IaA267B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1300,
        "name": "SJO-IaA354B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1301, "name": "SJO-IaA367B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1302,
        "name": "SJO-IeA351B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1303, "name": "SJO-IeA378B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1304,
        "name": "SJO-IeN314A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1305, "name": "SJO-IsA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1306,
        "name": "SJO-IsA001B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1307, "name": "SJO-IsA009B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1308,
        "name": "SJO-IsA012B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1309, "name": "SJO-IsA016A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1310,
        "name": "SJO-IsA020B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1311, "name": "SJO-IsA021B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1312,
        "name": "SJO-IsA044B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1313, "name": "SJO-IsA046C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1314,
        "name": "SJO-IsA055B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1315, "name": "SJO-IsA067B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1316,
        "name": "SJO-IsA088B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1317, "name": "SJO-IsA099B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1318,
        "name": "SJO-IsA207A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1319, "name": "SJO-ISA209B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1320,
        "name": "SJO-IsA212B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1321, "name": "SJO-IsA216A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1322,
        "name": "SJO-IsA221B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1323, "name": "SJO-IsA244B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1324,
        "name": "SJO-IsA246C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1325, "name": "SJO-IsA255B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1326,
        "name": "SJO-IsA261A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1327, "name": "SJO-IsA267B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1328,
        "name": "SJO-IsA288B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1329, "name": "SJO-IsA299B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1330,
        "name": "SJO-IsA307A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1331, "name": "SJO-IsA316A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1332,
        "name": "SJO-IsA320B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1333, "name": "SJO-IsA320B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1334,
        "name": "SJO-IsA344B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1335, "name": "SJO-IsA354B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1336,
        "name": "SJO-IsA361A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1337, "name": "SJO-IsA388B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1338,
        "name": "SJO-IsA399B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1339, "name": "SJO-IsF003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1340,
        "name": "SJO-IsF101A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1341, "name": "SJO-IsF102A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1342,
        "name": "SJO-IsF201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1343, "name": "SJO-IsF202A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1344,
        "name": "SJO-IsF203A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1345, "name": "SJO-IsF302A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1346,
        "name": "SJO-IsH001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1347, "name": "SJO-IsH008A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1348,
        "name": "SJO-IsH201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1349, "name": "SJO-IsH208A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1350,
        "name": "SJO-IsH301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1351, "name": "SJO-IsH308A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1352,
        "name": "SJO-IsN002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1353, "name": "SJO-IsN007A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1354,
        "name": "SJO-IsN063A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1355, "name": "SJO-IsN069A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1356,
        "name": "SJO-IsN202A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1357, "name": "SJO-IsN203A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1358,
        "name": "SJO-IsN207A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1359, "name": "SJO-IsN263A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1360,
        "name": "SJO-IsN269A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1361, "name": "SJO-IsN302A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1362,
        "name": "SJO-IsN307A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1363, "name": "SJO-IsN363A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1364,
        "name": "SJO-IsN369A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1365, "name": "SJO-IsR002A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1366,
        "name": "SJO-IsR202A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1367, "name": "SJO-IsR203B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1368,
        "name": "SJO-IsR302A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1369, "name": "SJO-IsR303B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1370,
        "name": "SJO-IsR307A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1371, "name": "SJO-IsW009A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1372,
        "name": "SJO-IsW209A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1373, "name": "SJO-IsW300A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1374,
        "name": "SJO-Ma013B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1375, "name": "SJO-MaA001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1376,
        "name": "SJO-MaA004B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1377, "name": "SJO-MaA013B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1378,
        "name": "SJO-MaA015B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1379, "name": "SJO-MaA021C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1380,
        "name": "SJO-MaA077C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1381, "name": "SJO-MaA101C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1382,
        "name": "SJO-MaA204B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1383, "name": "SJO-MaA213B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1384,
        "name": "SJO-MaA215B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1385, "name": "SJO-MaA221C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1386,
        "name": "SJO-MaA250B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1387, "name": "SJO-MaA255B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1388,
        "name": "SJO-MaA261B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1389, "name": "SJO-MaA277C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1390,
        "name": "SJO-MaA301C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1391, "name": "SJO-MaA310B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1392,
        "name": "SJO-MaA321C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1393, "name": "SJO-MaA350B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1394,
        "name": "SJO-MaA361B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1395, "name": "SJO-MaA377C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1396,
        "name": "SJO-MaH008A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1397, "name": "SJO-MaH208A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1398,
        "name": "SJO-MaN001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1399, "name": "SJO-MaN201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1400,
        "name": "SJO-MaW005A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1401, "name": "SJO-MaW205A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1402,
        "name": "SJO-Mg011B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1403, "name": "SJO-MgA001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1404,
        "name": "SJO-MgA002C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1405, "name": "SJO-MgA003B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1406,
        "name": "SJO-MgA007A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1407, "name": "SJO-MgA007B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1408,
        "name": "SJO-MgA008A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1409, "name": "SJO-MgA008B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1410,
        "name": "SJO-MgA010B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1411, "name": "SJO-MgA010B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1412,
        "name": "SJO-MgA011B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1413, "name": "SJO-MgA019B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1414,
        "name": "SJO-MgA029B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1415, "name": "SJO-MgA031B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1416,
        "name": "SJO-MgA033B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1417, "name": "SJO-MgA038B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1418,
        "name": "SJO-MgA077B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1419, "name": "SJO-MgA078C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1420,
        "name": "SJO-MgA079C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1421, "name": "SJO-MgA207B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1422,
        "name": "SJO-MgA208A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1423, "name": "SJO-MgA210B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1424,
        "name": "SJO-MgA211B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1425, "name": "SJO-MgA219B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1426,
        "name": "SJO-MgA229B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1427, "name": "SJO-MgA231B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1428,
        "name": "SJO-MgA233B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1429, "name": "SJO-MgA245B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1430,
        "name": "SJO-MgA257B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1431, "name": "SJO-MgA262B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1432,
        "name": "SJO-MgA278C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1433, "name": "SJO-MgA279C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1434,
        "name": "SJO-MgA302C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1435, "name": "SJO-MgA310B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1436,
        "name": "SJO-MgA320B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1437, "name": "SJO-MgA338B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1438,
        "name": "SJO-MgA345B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1439, "name": "SJO-MgA357B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1440,
        "name": "SJO-MgA362B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1441, "name": "SJO-MgA377B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1442,
        "name": "SJO-MgA378C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1443, "name": "SJO-MgA379C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1444,
        "name": "SJO-MgF006A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1445, "name": "SJO-MgF206A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1446,
        "name": "SJO-MgF306A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1447, "name": "SJO-MgF313A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1448,
        "name": "SJO-MgF332A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1449, "name": "SJO-MgH006A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1450,
        "name": "SJO-MgH021A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1451, "name": "SJO-MgH028A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1452,
        "name": "SJO-MgH221A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1453, "name": "SJO-MgH228A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1454,
        "name": "SJO-MgH309A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1455, "name": "SJO-MgH316A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1456,
        "name": "SJO-MgH328A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1457, "name": "SJO-MgN001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1458,
        "name": "SJO-MgN004A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1459, "name": "SJO-MgN032A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1460,
        "name": "SJO-MgN059A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1461, "name": "SJO-MgN201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1462,
        "name": "SJO-MgN204A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1463, "name": "SJO-MgN232A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1464,
        "name": "SJO-MgN259A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1465, "name": "SJO-MgN304A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1466,
        "name": "SJO-MgN332A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1467, "name": "SJO-MgN359A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1468,
        "name": "SJO-MgR005A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1469, "name": "SJO-MgR205A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1470,
        "name": "SJO-MgR305A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1471, "name": "SJO-MgR317A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1472,
        "name": "SJO-MgW012A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1473, "name": "SJO-MgW201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1474,
        "name": "SJO-MgW212A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1475, "name": "SJO-MgW312A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1476,
        "name": "SJO-MrA001A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1477, "name": "SJO-MrA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1478,
        "name": "SJO-MrA001B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1479, "name": "SJO-MrA002B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1480,
        "name": "SJO-MrA003B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1481, "name": "SJO-MrF020A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1482,
        "name": "SJO-MrN001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1483, "name": "SJO-MrW004A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1484,
        "name": "SJO-MWAR002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1485, "name": "SJO-MWF001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1486,
        "name": "SJO-MWF001B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1487, "name": "SJO-MWF002A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1488,
        "name": "SJO-MWF011A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1489, "name": "SJO-MWF012A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1490,
        "name": "SJO-MWF201A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1491, "name": "SJO-MWF201B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1492,
        "name": "SJO-MWH002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1493, "name": "SJO-MWH003A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1494,
        "name": "SJO-MWH005B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1495, "name": "SJO-MWH202A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1496,
        "name": "SJO-MWH203A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1497, "name": "SJO-MWH205B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1498,
        "name": "SJO-MWN001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1499, "name": "SJO-MWN002A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1500,
        "name": "SJO-MWN003B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1501, "name": "SJO-MWN004B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1502,
        "name": "SJO-MWN044B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1503, "name": "SJO-MWN203B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1504,
        "name": "SJO-MWN204B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1505, "name": "SJO-MWN225B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1506,
        "name": "SJO-MWN244B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1507, "name": "SJO-MWR001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1508,
        "name": "SJO-MWR002B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1509, "name": "SJO-MWR003B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1510,
        "name": "SJO-MWR003B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1511, "name": "SJO-MWR201A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1512,
        "name": "SJO-MWR202B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1513, "name": "SJO-MWR202B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1514,
        "name": "SJO-MWR203B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1515, "name": "SJO-MWR203B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1516,
        "name": "SJO-MWW002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1517, "name": "SJO-MWW202A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1518,
        "name": "SJO-RcA001B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1519, "name": "SJO-RcA001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1520,
        "name": "SJO-RcA001C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1521, "name": "SJO-RcA003B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1522,
        "name": "SJO-RcA005B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1523, "name": "SJO-RcA007B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1524,
        "name": "SJO-RcA014B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1525, "name": "SJO-RcA015B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1526,
        "name": "SJO-RcA018B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1527, "name": "SJO-RcA019B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1528,
        "name": "SJO-RcA020A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1529, "name": "SJO-RcA021A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1530,
        "name": "SJO-RcA022A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1531, "name": "SJO-RcA022C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1532,
        "name": "SJO-RcA023A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1533, "name": "SJO-RcA029C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1534,
        "name": "SJO-RcA044B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1535, "name": "SJO-RcA057B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1536,
        "name": "SJO-RcA059B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1537, "name": "SJO-RcA062C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1538,
        "name": "SJO-Rca076B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1539, "name": "SJO-RcA101C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1540,
        "name": "SJO-RcA207B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1541, "name": "SJO-RcA214B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1542,
        "name": "SJO-RcA215B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1543, "name": "SJO-RcA218B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1544,
        "name": "SJO-RcA219B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1545, "name": "SJO-RcA222A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1546,
        "name": "SJO-RcA229C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1547, "name": "SJO-RcA244B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1548,
        "name": "SJO-RcA245B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1549, "name": "SJO-RcA246B1/GBE", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1550,
        "name": "SJO-RcA257B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1551, "name": "SJO-RcA259B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1552,
        "name": "SJO-RcA262C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1553, "name": "SJO-RcA276B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1554,
        "name": "SJO-RcA277B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1555, "name": "SJO-RcA278B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1556,
        "name": "SJO-RcA279B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1557, "name": "SJO-RcA280B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1558,
        "name": "SJO-RcA281B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1559, "name": "SJO-RcA282B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1560,
        "name": "SJO-RcA285B2/GBE",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1561, "name": "SJO-RcA322A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1562,
        "name": "SJO-RcA345B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1563, "name": "SJO-RcA346B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1564,
        "name": "SJO-RcA362C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1565, "name": "SJO-RcA376B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1566,
        "name": "SJO-RcA377B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1567, "name": "SJO-RcA378B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1568,
        "name": "SJO-RcA379B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1569, "name": "SJO-RcA380B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1570,
        "name": "SJO-RcA381B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1571, "name": "SJO-RcA382B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1572,
        "name": "SJO-RcA385B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1573, "name": "SJO-RcF001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1574,
        "name": "SJO-RcF030A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1575, "name": "SJO-RcF201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1576,
        "name": "SJO-RcF277A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1577, "name": "SJO-RcF301A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1578,
        "name": "SJO-RcF377A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1579, "name": "SJO-RcH001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1580,
        "name": "SJO-RcH024A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1581, "name": "SJO-RcH201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1582,
        "name": "SJO-RcH224A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1583, "name": "SJO-RCH262C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1584,
        "name": "SJO-RcH324A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1585, "name": "SJO-RcN001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1586,
        "name": "SJO-RcN002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1587, "name": "SJO-RcN004A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1588,
        "name": "SJO-RcN005A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1589, "name": "SJO-RcN030A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1590,
        "name": "SJO-RcN040A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1591, "name": "SJO-RcN201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1592,
        "name": "SJO-RcN201A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1593, "name": "SJO-RcN204A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1594,
        "name": "SJO-RcN205A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1595, "name": "SJO-RcN230A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1596,
        "name": "SJO-RcN301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1597, "name": "SJO-RcN301A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1598,
        "name": "SJO-RcN330A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1599, "name": "SJO-RcR003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1600,
        "name": "SJO-RcR004A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1601, "name": "SJO-RcR201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1602,
        "name": "SJO-RcR203A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1603, "name": "SJO-RcR204A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1604,
        "name": "SJO-RcR301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1605, "name": "SJO-RcW002A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1606,
        "name": "SJO-RcW101A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1607, "name": "SJO-RcW201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1608,
        "name": "SJO-RcW202A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1609, "name": "SJO-RcW301A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1610,
        "name": "SJO-ScA002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1611, "name": "SJO-ScA007B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1612,
        "name": "SJO-ScA040B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1613, "name": "SJO-ScA202A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1614,
        "name": "SJO-ScA207B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1615, "name": "SJO-ScA228B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1616,
        "name": "SJO-ScA240B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1617, "name": "SJO-ScA274B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1618,
        "name": "SJO-ScA340B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1619, "name": "SJO-ScA374B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1620,
        "name": "SJO-ScF217A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1621, "name": "SJO-ScF317A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1622,
        "name": "SJO-ScH001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1623, "name": "SJO-ScH305A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1624,
        "name": "SJO-ScN201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1625, "name": "SJO-ScN301A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1626,
        "name": "SJO-ScW209A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1627, "name": "SJO-ScW309A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1628,
        "name": "SJO-Sm385B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1629, "name": "SJO-SmA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1630,
        "name": "SJO-SmA003A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1631, "name": "SJO-SmA004A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1632,
        "name": "SJO-SmA013A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1633, "name": "SJO-SmA015B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1634,
        "name": "SJO-SmA020B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1635, "name": "SJO-SmA023B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1636,
        "name": "SJO-SmA035B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1637, "name": "SJO-SmA054B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1638,
        "name": "SJO-SmA055B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1639, "name": "SJO-SmA060B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1640,
        "name": "SJO-SmA079B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1641, "name": "SJO-SmA079B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1642,
        "name": "SJO-SmA203C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1643, "name": "SJO-SmA204B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1644,
        "name": "SJO-SmA213A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1645, "name": "SJO-SmA215B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1646,
        "name": "SJO-SmA220B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1647, "name": "SJO-SmA223B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1648,
        "name": "SJO-SmA235B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1649, "name": "SJO-SmA254B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1650,
        "name": "SJO-SmA255B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1651, "name": "SJO-SmA259B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1652,
        "name": "SJO-SMA260B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1653, "name": "SJO-SmA285B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1654,
        "name": "SJO-SmA303C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1655, "name": "SJO-SmA313A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1656,
        "name": "SJO-SmA323B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1657, "name": "SJO-SmA337B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1658,
        "name": "SJO-SmA359B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1659, "name": "SJO-SmA371B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1660,
        "name": "SJO-SmA385B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1661, "name": "SJO-SmF001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1662,
        "name": "SJO-SmF005A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1663, "name": "SJO-SmF201A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1664,
        "name": "SJO-SmF205A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1665, "name": "SJO-SmF302A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1666,
        "name": "SJO-SmH004A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1667, "name": "SJO-SmH009A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1668,
        "name": "SJO-SmH204A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1669, "name": "SJO-SmH209A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1670,
        "name": "SJO-SmH304A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1671, "name": "SJO-SmH309A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1672,
        "name": "SJO-SmN016A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1673, "name": "SJO-SmN216A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1674,
        "name": "SJO-SmN240A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1675, "name": "SJO-SmN316A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1676,
        "name": "SJO-SmN340A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1677, "name": "SJO-SmR003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1678,
        "name": "SJO-SmR203A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1679, "name": "SJO-SmR303A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1680,
        "name": "SJO-SmW002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1681, "name": "SJO-SmW202A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1682,
        "name": "SJO-SmW302A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1683, "name": "SJO-SWA004B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1684,
        "name": "SJO-SWA005B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1685, "name": "SJO-SWA036A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1686,
        "name": "SJO-SWA068B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1687, "name": "SJO-SWA070B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1688,
        "name": "SJO-SWA204B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1689, "name": "SJO-SWA242B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1690,
        "name": "SJO-SWA268B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1691, "name": "SJO-SWA270B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1692,
        "name": "SJO-SWA342B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1693, "name": "SJO-SWA343A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1694,
        "name": "SJO-SWA360B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1695, "name": "SJO-SWA361B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1696,
        "name": "SJO-SWF202A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1697, "name": "SJO-SWF302A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1698,
        "name": "SJO-SWN013A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1699, "name": "SJO-SWN062A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1700,
        "name": "SJO-SWN213A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1701, "name": "SJO-SWN313A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1702,
        "name": "SJO-SWN314A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1703, "name": "SJO-SWN323A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1704,
        "name": "SJO-SWN326A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1705, "name": "SJO-SZAd307A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1706,
        "name": "SJO-SZAdA003A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1707, "name": "SJO-SZAdA015A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1708,
        "name": "SJO-SZAdA034B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1709, "name": "SJO-SZAdA047B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1710,
        "name": "SJO-SZAdA203A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1711, "name": "SJO-SZAdA215A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1712,
        "name": "SJO-SZAdA234B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1713, "name": "SJO-SZAdA303A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1714,
        "name": "SJO-SZAdA323B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1715, "name": "SJO-SZAdA334B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1716,
        "name": "SJO-SZAdA347B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1717, "name": "SJO-SZAdH203A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1718,
        "name": "SJO-SZAdN007A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1719, "name": "SJO-SZAdN009A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1720,
        "name": "SJO-SZAdN010A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1721, "name": "SJO-SZAdN207A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1722,
        "name": "SJO-SZAdN209A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1723, "name": "SJO-SZAdN210A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1724,
        "name": "SJO-SZAdN307A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1725, "name": "SJO-SZAdN308A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1726,
        "name": "SJO-SZAdN309A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1727, "name": "SJO-SZAdN310A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1728,
        "name": "SJO-SZAdR001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1729, "name": "SJO-SZAdR201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1730,
        "name": "SJO-SZEkA022B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1731, "name": "SJO-SZEkA038B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1732,
        "name": "SJO-SZEkA040B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1733, "name": "SJO-SZEkA044B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1734,
        "name": "SJO-SZEkA045B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1735, "name": "SJO-SZEkA217A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1736,
        "name": "SJO-SZEkA222B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1737, "name": "SJO-SZEkA238B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1738,
        "name": "SJO-SZEkA240B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1739, "name": "SJO-SZEkA244B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1740,
        "name": "SJO-SZEkA301A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1741, "name": "SJO-SZEkA317A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1742,
        "name": "SJO-SZEkA338B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1743, "name": "SJO-SZEkA340B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1744,
        "name": "SJO-SZEkA340B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1745, "name": "SJO-SZEkA345B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1746,
        "name": "SJO-SZEkF098A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1747, "name": "SJO-SZEkF298A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1748,
        "name": "SJO-SZEkF302A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1749, "name": "SJO-SZEkF398A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1750,
        "name": "SJO-SZEkN006A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1751, "name": "SJO-SZEkN007A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1752,
        "name": "SJO-SZEkN008A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1753, "name": "SJO-SZEkN206A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1754,
        "name": "SJO-SZEkN207A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1755, "name": "SJO-SZEkN208A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1756,
        "name": "SJO-SZEkN306A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1757, "name": "SJO-SZEkN307A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1758,
        "name": "SJO-SZEkN308A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1759, "name": "SJO-SZEkW003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1760,
        "name": "SJO-SZEkW203A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1761, "name": "SJO-SZEkW303A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1762,
        "name": "SJO-SZEpKA301B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1763, "name": "SJO-SZEpN302A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1764,
        "name": "SJO-SZEpN312A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1765, "name": "SJO-SZFfA003", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1766,
        "name": "SJO-SZFr251B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1767, "name": "SJO-SZFrA001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1768,
        "name": "SJO-SZFrA001B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1769, "name": "SJO-SZFrA002A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1770,
        "name": "SJO-SZFrA003B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1771, "name": "SJO-SZFrA004A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1772,
        "name": "SJO-SZFrA004B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1773, "name": "SJO-SZFrA005B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1774,
        "name": "SJO-SZFrA006B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1775, "name": "SJO-SZFrA012A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1776,
        "name": "SJO-SZFrA014A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1777, "name": "SJO-SZFrA017A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1778,
        "name": "SJO-SZFrA027B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1779, "name": "SJO-SZFrA030B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1780,
        "name": "SJO-SZFrA032B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1781, "name": "SJO-SZFrA034B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1782,
        "name": "SJO-SZFrA040B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1783, "name": "SJO-SZFrA051B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1784,
        "name": "SJO-SZFrA059B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1785, "name": "SJO-SZFrA068B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1786,
        "name": "SJO-SZFrA101B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1787, "name": "SJO-SZFrA201B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1788,
        "name": "SJO-SZFrA202A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1789, "name": "SJO-SZFrA203B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1790,
        "name": "SJO-SZFrA204B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1791, "name": "SJO-SZFrA205B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1792,
        "name": "SJO-SZFrA205B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1793, "name": "SJO-SZFrA206B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1794,
        "name": "SJO-SZFrA212A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1795, "name": "SJO-SZFrA214A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1796,
        "name": "SJO-SZFrA217A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1797, "name": "SJO-SZFrA227B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1798,
        "name": "SJO-SZFrA230B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1799, "name": "SJO-SZFrA233B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1800,
        "name": "SJO-SZFrA236B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1801, "name": "SJO-SZFrA239B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1802,
        "name": "SJO-SZFrA240B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1803, "name": "SJO-SZFrA251B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1804,
        "name": "SJO-SZFrA259B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1805, "name": "SJO-SZFrA268B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1806,
        "name": "SJO-SZFrA302A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1807, "name": "SJO-SZFrA305B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1808,
        "name": "SJO-SZFrA312A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1809, "name": "SJO-SZFrA314A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1810,
        "name": "SJO-SZFrA317A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1811, "name": "SJO-SZFRA330B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1812,
        "name": "SJO-SZFrA333B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1813, "name": "SJO-SZFrA336B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1814,
        "name": "SJO-SZFrA339B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1815, "name": "SJO-SZFrA346B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1816,
        "name": "SJO-SZFrA351B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1817, "name": "SJO-SZFrA353B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1818,
        "name": "SJO-SZFrA368B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1819, "name": "SJO-SZFrF044A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1820,
        "name": "SJO-SZFrF208A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1821, "name": "SJO-SZFrF244A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1822,
        "name": "SJO-SZFrF302A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1823, "name": "SJO-SZFrF308A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1824,
        "name": "SJO-SZFrF344A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1825, "name": "SJO-SZFrN001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1826,
        "name": "SJO-SZFrN004A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1827, "name": "SJO-SZFrN012A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1828,
        "name": "SJO-SZFrN024A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1829, "name": "SJO-SZFrN025A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1830,
        "name": "SJO-SZFrN026A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1831, "name": "SJO-SZFrN027A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1832,
        "name": "SJO-SZFrN028A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1833, "name": "SJO-SZFrN047A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1834,
        "name": "SJO-SZFrN201A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1835, "name": "SJO-SZFrN204A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1836,
        "name": "SJO-SZFrN204A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1837, "name": "SJO-SZFrN210A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1838,
        "name": "SJO-SZFrN212A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1839, "name": "SJO-SZFrN214A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1840,
        "name": "SJO-SZFrN224A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1841, "name": "SJO-SZFrN225A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1842,
        "name": "SJO-SZFrN228A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1843, "name": "SJO-SZFrN247A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1844,
        "name": "SJO-SZFrN304A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1845, "name": "SJO-SZFrN310A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1846,
        "name": "SJO-SZFrN312A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1847, "name": "SJO-SZFrN314A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1848,
        "name": "SJO-SZFrN324A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1849, "name": "SJO-SZFrN324A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1850,
        "name": "SJO-SZFrN325A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1851, "name": "SJO-SZFrN326A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1852,
        "name": "SJO-SZFrN347A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1853, "name": "SJO-SZFrR002A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1854,
        "name": "SJO-SZFrR202A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1855, "name": "SJO-SZFrR301A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1856,
        "name": "SJO-SZFrR302A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1857, "name": "SJO-SZFrW006A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1858,
        "name": "SJO-SZFrW105A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1859, "name": "SJO-SZFrW203A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1860,
        "name": "SJO-SZFrW206A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1861, "name": "SJO-SZFrW303A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1862,
        "name": "SJO-SZFrW305A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1863, "name": "SJO-SZGiA048B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1864,
        "name": "SJO-SZGiA201B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1865, "name": "SJO-SZGiA301B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1866,
        "name": "SJO-SZGiN201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1867, "name": "SJO-SZGiN301A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1868,
        "name": "SJO-SZGpN212A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1869, "name": "SJO-SZGpN213A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1870,
        "name": "SJO-SZGpN312A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1871, "name": "SJO-SZGpW304A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1872,
        "name": "SJO-SZIsA007A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1873, "name": "SJO-SZIsA041B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1874,
        "name": "SJO-SZIsA043A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1875, "name": "SJO-SZIsA043B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1876,
        "name": "SJO-SZIsA046B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1877, "name": "SJO-SZIsA058B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1878,
        "name": "SJO-SZIsA066B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1879, "name": "SJO-SZIsA069B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1880,
        "name": "SJO-SZIsA201A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1881, "name": "SJO-SZIsA202A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1882,
        "name": "SJO-SZIsA203A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1883, "name": "SJO-SZIsA204A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1884,
        "name": "SJO-SZIsA207A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1885, "name": "SJO-SZIsA232A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1886,
        "name": "SJO-SZIsA241B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1887, "name": "SJO-SZIsA243A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1888,
        "name": "SJO-SZISA243B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1889, "name": "SJO-SZIsA249A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1890,
        "name": "SJO-SZIsA257B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1891, "name": "SJO-SZIsA258B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1892,
        "name": "SJO-SZIsA260B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1893, "name": "SJO-SZIsA267B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1894,
        "name": "SJO-SZIsA269B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1895, "name": "SJO-SZIsA270B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1896,
        "name": "SJO-SZIsA307A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1897, "name": "SJO-SZIsA332A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1898,
        "name": "SJO-SZIsA343B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1899, "name": "SJO-SZIsA349A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1900,
        "name": "SJO-SZIsA357B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1901, "name": "SJO-SZIsA358B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1902,
        "name": "SJO-SZIsA366B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1903, "name": "SJO-SZIsA369B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1904,
        "name": "SJO-SZIsA370B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1905, "name": "SJO-SZIsF206A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1906,
        "name": "SJO-SZIsF306A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1907, "name": "SJO-SZIsN001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1908,
        "name": "SJO-SZIsN008A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1909, "name": "SJO-SZIsN013A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1910,
        "name": "SJO-SZIsN025A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1911, "name": "SJO-SZIsN033A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1912,
        "name": "SJO-SZIsN049A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1913, "name": "SJO-SZIsN062A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1914,
        "name": "SJO-SZIsN201A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1915, "name": "SJO-SZIsN208A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1916,
        "name": "SJO-SZIsN213A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1917, "name": "SJO-SZIsN215A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1918,
        "name": "SJO-SZIsN225A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1919, "name": "SJO-SZIsN233A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1920,
        "name": "SJO-SZIsN262A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1921, "name": "SJO-SZIsN301A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1922,
        "name": "SJO-SZIsN302A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1923, "name": "SJO-SZIsN307A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1924,
        "name": "SJO-SZIsN308A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1925, "name": "SJO-SZIsN313A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1926,
        "name": "SJO-SZIsN315A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1927, "name": "SJO-SZIsN325A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1928,
        "name": "SJO-SZIsN333A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1929, "name": "SJO-SZIsN361A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1930,
        "name": "SJO-SZIsN362A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1931, "name": "SJO-SZIsN364A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1932,
        "name": "SJO-SZIsR003A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1933, "name": "SJO-SZIsR027A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1934,
        "name": "SJO-SZIsR201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1935, "name": "SJO-SZIsR203A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1936,
        "name": "SJO-SZIsR301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1937, "name": "SJO-SZIsR303A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1938,
        "name": "SJO-SZIsW009A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1939, "name": "SJO-SZIsW101A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1940,
        "name": "SJO-SZIsW201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1941, "name": "SJO-SZIsW209A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1942,
        "name": "SJO-SZIsW301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1943, "name": "SJO-SZIsW309A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1944,
        "name": "SJO-SZMgA015A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1945, "name": "SJO-SZMgA016B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1946,
        "name": "SJO-SZMgA020A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1947, "name": "SJO-SZMgA024B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1948,
        "name": "SJO-SZMgA044B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1949, "name": "SJO-SZMgA208A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1950,
        "name": "SJO-SZMgA215A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1951, "name": "SJO-SZMgA216B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1952,
        "name": "SJO-SZMgA224B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1953, "name": "SJO-SZMgA244B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1954,
        "name": "SJO-SZMgA308A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1955, "name": "SJO-SZMgA316B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1956,
        "name": "SJO-SZMgA344B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1957, "name": "SJO-SZMgN222A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1958,
        "name": "SJO-SZMgN322A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1959, "name": "SJO-SZRc230A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1960,
        "name": "SJO-SZRc319B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1961, "name": "SJO-SZRcA019A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1962,
        "name": "SJO-SZRcA019B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1963, "name": "SJO-SZRcA020B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1964,
        "name": "SJO-SZRcA050A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1965, "name": "SJO-SZRcA055B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1966,
        "name": "SJO-SZRcA101A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1967, "name": "SJO-SZRcA207B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1968,
        "name": "SJO-SZRcA208B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1969, "name": "SJO-SZRcA219A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1970,
        "name": "SJO-SZRcA219B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1971, "name": "SJO-SZRcA220B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1972,
        "name": "SJO-SZRcA221A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1973, "name": "SJO-SZRcA250A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1974,
        "name": "SJO-SZRcA255B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1975, "name": "SJO-SZRcA307B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1976,
        "name": "SJO-SZRcA308B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1977, "name": "SJO-SZRcA319A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1978,
        "name": "SJO-SZRcA321A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1979, "name": "SJO-SZRcA350A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1980,
        "name": "SJO-SZRcA355B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1981, "name": "SJO-SZRcF030A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1982,
        "name": "SJO-SZRcF230A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1983, "name": "SJO-SZRcN007A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1984,
        "name": "SJO-SZRcN009A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1985, "name": "SJO-SZRcN023A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1986,
        "name": "SJO-SZRcN030A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1987, "name": "SJO-SZRcN207A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1988,
        "name": "SJO-SZRcN209A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1989, "name": "SJO-SZRcN223A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1990,
        "name": "SJO-SZRcN230A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1991, "name": "SJO-SZRcN323A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1992,
        "name": "SJO-SZRcR005A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1993, "name": "SJO-SZRcR205A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1994,
        "name": "SJO-SZSm206A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1995, "name": "SJO-SZSmA011B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1996,
        "name": "SJO-SZSmA011B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1997, "name": "SJO-SZSmA206A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 1998,
        "name": "SJO-SZSmA208A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 1999, "name": "SJO-SZSmA211B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2000,
        "name": "SJO-SZSmA240B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2001, "name": "SJO-SZSmA250B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2002,
        "name": "SJO-SZSmA306A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2003, "name": "SJO-SZSmA311B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2004,
        "name": "SJO-SZSmA340B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2005, "name": "SJO-SZSmA350B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2006,
        "name": "SJO-SZToA009A2 ",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2007, "name": "SJO-SZToA054B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2008,
        "name": "SJO-SZToA231B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2009, "name": "SJO-SZToA254B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2010,
        "name": "SJO-SZToA300A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2011, "name": "SJO-SZToA331B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2012,
        "name": "SJO-SZToA400A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2013, "name": "SJO-SZToA428A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2014,
        "name": "SJO-SZToA431B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2015, "name": "SJO-SZToN005A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2016,
        "name": "SJO-SZToN006A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2017, "name": "SJO-SZToN201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2018,
        "name": "SJO-SZToN205A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2019, "name": "SJO-SZToN206A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2020,
        "name": "SJO-SZToN301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2021, "name": "SJO-SZToN403A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2022,
        "name": "SJO-SZToN411A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2023, "name": "SJO-SZTr214B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2024,
        "name": "SJO-SZTrA004B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2025, "name": "SJO-SZTrA004B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2026,
        "name": "SJO-SZTrA010A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2027, "name": "SJO-SZTrA014B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2028,
        "name": "SJO-SZTrA029A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2029, "name": "SJO-SZTrA059B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2030,
        "name": "SJO-SZTrA204B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2031, "name": "SJO-SZTrA204B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2032,
        "name": "SJO-SZTrA210A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2033, "name": "SJO-SZTrA229A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2034,
        "name": "SJO-SZTrA242B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2035, "name": "SJO-SZTrA251B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2036,
        "name": "SJO-SZTrA252B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2037, "name": "SJO-SZTrA259B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2038,
        "name": "SJO-SZTrA304B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2039, "name": "SJO-SZTrA310A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2040,
        "name": "SJO-SZTrA318A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2041, "name": "SJO-SZTrA342B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2042,
        "name": "SJO-SZTrA349B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2043, "name": "SJO-SZTrA351B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2044,
        "name": "SJO-SZTrF304A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2045, "name": "SJO-SZTrN006A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2046,
        "name": "SJO-SZTrN205A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2047, "name": "SJO-SZTrN206A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2048,
        "name": "SJO-SZTrN215A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2049, "name": "SJO-SZTrN217A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2050,
        "name": "SJO-SZTrN305A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2051, "name": "SJO-SZTrN306A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2052,
        "name": "SJO-SZTrN315A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2053, "name": "SJO-SZTrW003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2054,
        "name": "SJO-SZTrW203A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2055, "name": "SJO-SZZaA004A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2056,
        "name": "SJO-SZZaA014B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2057, "name": "SJO-SZZaA027B", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2058,
        "name": "SJO-SZZaA037B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2059, "name": "SJO-SZZaA048B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2060,
        "name": "SJO-SZZaA057A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2061, "name": "SJO-SZZaA058A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2062,
        "name": "SJO-SZZaA204A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2063, "name": "SJO-SZZaA214B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2064,
        "name": "SJO-SZZaA227B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2065, "name": "SJO-SZZaA237B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2066,
        "name": "SJO-SZZaA238B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2067, "name": "SJO-SZZaA257A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2068,
        "name": "SJO-SZZaA304A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2069, "name": "SJO-SZZaA314B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2070,
        "name": "SJO-SZZaA316A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2071, "name": "SJO-SZZaA337B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2072,
        "name": "SJO-SZZaA350B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2073, "name": "SJO-SZZaF007A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2074,
        "name": "SJO-SZZaF009A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2075, "name": "SJO-SZZaF020A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2076,
        "name": "SJO-SZZaF220A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2077, "name": "SJO-SZZaF320A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2078,
        "name": "SJO-SZZaN004A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2079, "name": "SJO-SZZaN009A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2080,
        "name": "SJO-SZZaN027A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2081, "name": "SJO-SZZaN052A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2082,
        "name": "SJO-SZZaN203A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2083, "name": "SJO-SZZaN209A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2084,
        "name": "SJO-SZZaN227A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2085, "name": "SJO-SZZaN228A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2086,
        "name": "SJO-SZZaN229A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2087, "name": "SJO-SZZaN301A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2088,
        "name": "SJO-SZZaN302A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2089, "name": "SJO-SZZaN303A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2090,
        "name": "SJO-SZZaN303A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2091, "name": "SJO-SZZaN309A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2092,
        "name": "SJO-SZZaN328A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2093, "name": "SJO-SZZaN329A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2094,
        "name": "SJO-SZZaW094A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2095, "name": "SJO-SZZaW294A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2096,
        "name": "SJO-SZZaW301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2097, "name": "SJO-SZZaW394A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2098,
        "name": "SJO-SZZiA043B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2099, "name": "SJO-SZZiA241B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2100,
        "name": "SJO-SZZiN009A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2101, "name": "SJO-SZZiN010A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2102,
        "name": "SJO-SZZiN026A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2103, "name": "SJO-SZZiN209A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2104,
        "name": "SJO-SZZiN218A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2105, "name": "SJO-SZZiN226A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2106,
        "name": "SJO-SZZiN309A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2107, "name": "SJO-SZZiN326A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2108,
        "name": "SJO-To208A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2109, "name": "SJO-ToA001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2110,
        "name": "SJO-ToA002B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2111, "name": "SJO-ToA003B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2112,
        "name": "SJO-ToA005B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2113, "name": "SJO-ToA024A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2114,
        "name": "SJO-ToA024B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2115, "name": "SJO-ToA025A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2116,
        "name": "SJO-ToA026A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2117, "name": "SJO-ToA026B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2118,
        "name": "SJO-ToA028B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2119, "name": "SJO-ToA032B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2120,
        "name": "SJO-ToA040B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2121, "name": "SJO-ToA064B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2122,
        "name": "SJO-ToA068A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2123, "name": "SJO-ToA202B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2124,
        "name": "SJO-ToA203B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2125, "name": "SJO-ToA211B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2126,
        "name": "SJO-ToA214B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2127, "name": "SJO-ToA224A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2128,
        "name": "SJO-ToA224B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2129, "name": "SJO-ToA226B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2130,
        "name": "SJO-ToA228B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2131, "name": "SJO-ToA229B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2132,
        "name": "SJO-ToA232B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2133, "name": "SJO-ToA240B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2134,
        "name": "SJO-ToA253B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2135, "name": "SJO-ToA264B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2136,
        "name": "SJO-ToA282B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2137, "name": "SJO-ToA297B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2138,
        "name": "SJO-ToA305A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2139, "name": "SJO-ToA311B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2140,
        "name": "SJO-ToA326B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2141, "name": "SJO-ToA329B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2142,
        "name": "SJO-ToA342B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2143, "name": "SJO-ToA353B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2144,
        "name": "SJO-ToA364B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2145, "name": "SJO-ToA397B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2146,
        "name": "SJO-ToF005A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2147, "name": "SJO-ToF205A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2148,
        "name": "SJO-ToF207A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2149, "name": "SJO-ToF305A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2150,
        "name": "SJO-ToF307A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2151, "name": "SJO-ToH011A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2152,
        "name": "SJO-ToH016A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2153, "name": "SJO-ToH211A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2154,
        "name": "SJO-ToH216A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2155, "name": "SJO-ToH311A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2156,
        "name": "SJO-ToH323A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2157, "name": "SJO-ToN008A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2158,
        "name": "SJO-ToN021A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2159, "name": "SJO-ToN056A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2160,
        "name": "SJO-ToN078A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2161, "name": "SJO-ToN079A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2162,
        "name": "SJO-ToN208A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2163, "name": "SJO-ToN221A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2164,
        "name": "SJO-ToN237A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2165, "name": "SJO-ToN256A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2166,
        "name": "SJO-ToN278A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2167, "name": "SJO-ToN279A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2168,
        "name": "SJO-ToN325A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2169, "name": "SJO-ToN337A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2170,
        "name": "SJO-ToN378A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2171, "name": "SJO-ToR001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2172,
        "name": "SJO-ToR201A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2173, "name": "SJO-ToR204A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2174,
        "name": "SJO-ToR304A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2175, "name": "SJO-ToW001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2176,
        "name": "SJO-ToW008A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2177, "name": "SJO-ToW201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2178,
        "name": "SJO-ToW208A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2179, "name": "SJO-ToW210A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2180,
        "name": "SJO-ToW301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2181, "name": "SJO-ToW308A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2182,
        "name": "SJO-TrA012B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2183, "name": "SJO-TrA033B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2184,
        "name": "SJO-TrA034B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2185, "name": "SJO-TrA046B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2186,
        "name": "SJO-TrA055B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2187, "name": "SJO-TrA056B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2188,
        "name": "SJO-TrA079B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2189, "name": "SJO-TrA080B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2190,
        "name": "SJO-TrA101A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2191, "name": "SJO-TrA201A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2192,
        "name": "SJO-TrA201B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2193, "name": "SJO-TrA212B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2194,
        "name": "SJO-TrA233B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2195, "name": "SJO-TrA234B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2196,
        "name": "SJO-TrA240B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2197, "name": "SJO-TrA255B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2198,
        "name": "SJO-TrA256B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2199, "name": "SJO-TRA260B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2200,
        "name": "SJO-TrA317B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2201, "name": "SJO-TrA343B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2202,
        "name": "SJO-TrA346B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2203, "name": "SJO-TrA355B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2204,
        "name": "SJO-TrA360B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2205, "name": "SJO-TrA379B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2206,
        "name": "SJO-TrH007A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2207, "name": "SJO-TrH008A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2208,
        "name": "SJO-TrH208A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2209, "name": "SJO-TrH221A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2210,
        "name": "SJO-TrH307A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2211, "name": "SJO-TrH321A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2212,
        "name": "SJO-TrN018A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2213, "name": "SJO-TrN218A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2214,
        "name": "SJO-TrW010A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2215, "name": "SJO-TrW210A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2216,
        "name": "SJO-TrW310A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2217, "name": "SJO-TZA218A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2218,
        "name": "SJO-TZA318A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2219, "name": "SJO-Za311A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2220,
        "name": "SJO-ZaA002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2221, "name": "SJO-ZaA003A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2222,
        "name": "SJO-ZaA004A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2223, "name": "SJO-ZaA005A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2224,
        "name": "SJO-ZaA011A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2225, "name": "SJO-ZaA015B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2226,
        "name": "SJO-ZaA017A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2227, "name": "SJO-ZaA018B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2228,
        "name": "SJO-ZaA023C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2229, "name": "SJO-ZaA024B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2230,
        "name": "SJO-ZaA025B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2231, "name": "SJO-ZaA027B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2232,
        "name": "SJO-ZaA028B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2233, "name": "SJO-ZaA029B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2234,
        "name": "SJO-ZaA040B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2235, "name": "SJO-ZaA041B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2236,
        "name": "SJO-ZaA047B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2237, "name": "SJO-ZaA055B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2238,
        "name": "SJO-ZaA056B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2239, "name": "SJO-ZaA061A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2240,
        "name": "SJO-ZaA065B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2241, "name": "SJO-ZaA069B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2242,
        "name": "SJO-ZaA070A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2243, "name": "SJO-ZaA081C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2244,
        "name": "SJO-ZaA090B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2245, "name": "SJO-ZaA101B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2246,
        "name": "SJO-ZaA201B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2247, "name": "SJO-ZaA202A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2248,
        "name": "SJO-ZaA211A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2249, "name": "SJO-ZaA215B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2250,
        "name": "SJO-ZaA218B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2251, "name": "SJO-ZaA219B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2252,
        "name": "SJO-ZaA223C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2253, "name": "SJO-ZaA224B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2254,
        "name": "SJO-ZaA227B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2255, "name": "SJO-ZaA228B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2256,
        "name": "SJO-ZaA229B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2257, "name": "SJO-ZaA229B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2258,
        "name": "SJO-ZaA240B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2259, "name": "SJO-ZaA241B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2260,
        "name": "SJO-ZaA247B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2261, "name": "SJO-ZaA256B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2262,
        "name": "SJO-ZaA260B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2263, "name": "SJO-ZaA261A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2264,
        "name": "SJO-ZaA262B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2265, "name": "SJO-ZaA265B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2266,
        "name": "SJO-ZaA269B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2267, "name": "SJO-ZaA281C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2268,
        "name": "SJO-ZaA304C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2269, "name": "SJO-ZaA311A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2270,
        "name": "SJO-ZaA320A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2271, "name": "SJO-ZaA321B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2272,
        "name": "SJO-ZaA325B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2273, "name": "SJO-ZaA329B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2274,
        "name": "SJO-ZaA329B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2275, "name": "SJO-ZaA340B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2276,
        "name": "SJO-ZaA341B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2277, "name": "SJO-ZaA355B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2278,
        "name": "SJO-ZaA360B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2279, "name": "SJO-ZaA363B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2280,
        "name": "SJO-ZaA365B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2281, "name": "SJO-ZaA370B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2282,
        "name": "SJO-ZaA381C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2283, "name": "SJO-ZaA389B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2284,
        "name": "SJO-ZaA390B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2285, "name": "SJO-ZaF003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2286,
        "name": "SJO-ZaF006A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2287, "name": "SJO-ZaF007A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2288,
        "name": "SJO-ZaF007A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2289, "name": "SJO-ZaF029A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2290,
        "name": "SJO-ZaF206A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2291, "name": "SJO-ZaF207A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2292,
        "name": "SJO-ZaF229A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2293, "name": "SJO-ZaF306A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2294,
        "name": "SJO-ZaF307A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2295, "name": "SJO-ZaF329A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2296,
        "name": "SJO-ZaH002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2297, "name": "SJO-ZaH004A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2298,
        "name": "SJO-ZaH018A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2299, "name": "SJO-ZaH019A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2300,
        "name": "SJO-ZaH020A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2301, "name": "SJO-ZaH039B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2302,
        "name": "SJO-ZaH204A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2303, "name": "SJO-ZaH218A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2304,
        "name": "SJO-ZaH219A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2305, "name": "SJO-ZaH220A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2306,
        "name": "SJO-ZaH239B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2307, "name": "SJO-ZaH302A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2308,
        "name": "SJO-ZaH319A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2309, "name": "SJO-ZaN008A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2310,
        "name": "SJO-ZaN009A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2311, "name": "SJO-ZaN010A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2312,
        "name": "SJO-ZaN011A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2313, "name": "SJO-ZaN019A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2314,
        "name": "SJO-ZaN029A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2315, "name": "SJO-ZaN055A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2316,
        "name": "SJO-ZaN061A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2317, "name": "SJO-ZaN208A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2318,
        "name": "SJO-ZaN209A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2319, "name": "SJO-ZaN210A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2320,
        "name": "SJO-ZaN211A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2321, "name": "SJO-ZaN219A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2322,
        "name": "SJO-ZaN232B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2323, "name": "SJO-ZaN244A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2324,
        "name": "SJO-ZaN255A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2325, "name": "SJO-ZaN261A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2326,
        "name": "SJO-ZaN308A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2327, "name": "SJO-ZaN310A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2328,
        "name": "SJO-ZaN311A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2329, "name": "SJO-ZaN319A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2330,
        "name": "SJO-ZaN329A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2331, "name": "SJO-ZaN332B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2332,
        "name": "SJO-ZaN344A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2333, "name": "SJO-ZaN345A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2334,
        "name": "SJO-ZaN361A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2335, "name": "SJO-ZaN367B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2336,
        "name": "SJO-ZaNO44A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2337, "name": "SJO-ZaR004A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2338,
        "name": "SJO-ZaR005A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2339, "name": "SJO-ZaR204A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2340,
        "name": "SJO-ZaR205A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2341, "name": "SJO-ZaR304A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2342,
        "name": "SJO-ZaW002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2343, "name": "SJO-ZaW005A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2344,
        "name": "SJO-ZaW205A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2345, "name": "SJO-ZaW302A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2346,
        "name": "SJO-ZaW305A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2347, "name": "SJO-ZiA001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2348,
        "name": "SJO-ZiA001B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2349, "name": "SJO-ZiA008B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2350,
        "name": "SJO-ZiA037B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2351, "name": "SJO-ZiA038B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2352,
        "name": "SJO-ZiA052B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2353, "name": "SJO-ZiA208B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2354,
        "name": "SJO-ZiA208B2 -e",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2355, "name": "SJO-ZiA218A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2356,
        "name": "SJO-ZiA232B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2357, "name": "SJO-ZiA238A2/B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2358,
        "name": "SJO-ZiA238B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2359, "name": "SJO-ZiA252B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2360,
        "name": "SJO-ZiA301B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2361, "name": "SJO-ZiA308B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2362,
        "name": "SJO-ZiA318A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2363, "name": "SJO-ZiF201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2364,
        "name": "SJO-ZiF301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2365, "name": "SJO-ZiF401A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2366,
        "name": "SJO-ZiH200A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2367, "name": "SJO-ZiH201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2368,
        "name": "SJO-ZiH301A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2369, "name": "SJO-ZiH316A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2370,
        "name": "SJO-ZiH413A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2371, "name": "SJO-ZiH416A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2372,
        "name": "SJO-ZiN010A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2373, "name": "SJO-ZiN201A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2374,
        "name": "SJO-ZiN210A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2375, "name": "SJO-ZiN301A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2376,
        "name": "SJO-ZiN310A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2377, "name": "SJO-ZiN311A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2378,
        "name": "SJO-ZiN411A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2379, "name": "SJO-ZiN420A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2380,
        "name": "SJO-ZiW288A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2381, "name": "SJO-ZiW401A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2382,
        "name": "SJO-ZTFN212B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2383, "name": "SJO-ZTN004B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2384,
        "name": "SJO-ZTN204B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2385, "name": "SJO-ZTR304A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2386,
        "name": "SJO-ZUEkA001B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2387, "name": "SJO-ZUEkA013B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2388,
        "name": "SJO-ZUEkA015B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2389, "name": "SJO-ZUEkA019C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2390,
        "name": "SJO-ZUEkA040B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2391, "name": "SJO-ZUEkA042B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2392,
        "name": "SJO-ZUEkA043A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2393, "name": "SJO-ZUEkA044A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2394,
        "name": "SJO-ZUEkN002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2395, "name": "SJO-ZUEkN003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2396,
        "name": "SJO-ZUEkN008A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2397, "name": "SJO-ZUEkN014A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2398,
        "name": "SJO-ZUEkN025A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2399, "name": "SJO-ZUFrA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2400,
        "name": "SJO-ZUFrA001B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2401, "name": "SJO-ZUFrA002A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2402,
        "name": "SJO-ZUFrA004B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2403, "name": "SJO-ZUFrA005A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2404,
        "name": "SJO-ZUFrA006B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2405, "name": "SJO-ZUFrA007A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2406,
        "name": "SJO-ZUFrA009B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2407, "name": "SJO-ZUFrA010A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2408,
        "name": "SJO-ZUFrA010B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2409, "name": "SJO-ZUFrA014A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2410,
        "name": "SJO-ZUFrA015A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2411, "name": "SJO-ZUFrA020C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2412,
        "name": "SJO-ZUFrA022A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2413, "name": "SJO-ZUFrA025B2 n", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2414,
        "name": "SJO-ZUFrA026B2 n",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2415, "name": "SJO-ZUFrA030B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2416,
        "name": "SJO-ZUFrA032B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2417, "name": "SJO-ZUFrA033B2 n", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2418,
        "name": "SJO-ZUFrA035B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2419, "name": "SJO-ZUFrA036B2 n", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2420,
        "name": "SJO-ZUFrA037B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2421, "name": "SJO-ZUFrA038B2 n", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2422,
        "name": "SJO-ZUFrA041B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2423, "name": "SJO-ZUFrA212B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2424,
        "name": "SJO-ZUFrA215A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2425, "name": "SJO-ZUFrF010A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2426,
        "name": "SJO-ZUFrN001A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2427, "name": "SJO-ZUFrN002A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2428,
        "name": "SJO-ZUFrN002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2429, "name": "SJO-ZUFrN003B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2430,
        "name": "SJO-ZUFrN004A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2431, "name": "SJO-ZUFrN008A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2432,
        "name": "SJO-ZUFrN009A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2433, "name": "SJO-ZUFrN012A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2434,
        "name": "SJO-ZUFrN018A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2435, "name": "SJO-ZUFrN020A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2436,
        "name": "SJO-ZUFrN021A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2437, "name": "SJO-ZUFrN026A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2438,
        "name": "SJO-ZUFrN027A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2439, "name": "SJO-ZUFrN029A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2440,
        "name": "SJO-ZUFrN030A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2441, "name": "SJO-ZUFrN048A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2442,
        "name": "SJO-ZUFrN210A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2443, "name": "SJO-ZUFrN230A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2444,
        "name": "SJO-ZUFrR004A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2445, "name": "SJO-ZUFrR005A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2446,
        "name": "SJO-ZUFrR024A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2447, "name": "SJO-ZUFrR070A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2448,
        "name": "SJO-ZUFrR101A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2449, "name": "SJO-ZUFrW029A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2450,
        "name": "SJO-ZUFrW030A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2451, "name": "SJO-ZUFrW101A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2452,
        "name": "SJO-ZUFrW102A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2453, "name": "SJO-ZUGaA015A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2454,
        "name": "SJO-ZUGaA016B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2455, "name": "SJO-ZUGaA024B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2456,
        "name": "SJO-ZUIeA022B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2457, "name": "SJO-ZUIeA023B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2458,
        "name": "SJO-ZUIeA028B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2459, "name": "SJO-ZUIeA030A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2460,
        "name": "SJO-ZUMgA003B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2461, "name": "SJO-ZURcA008A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2462,
        "name": "SJO-ZURcA010A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2463, "name": "SJO-ZURcA015B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2464,
        "name": "SJO-ZURcA017B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2465, "name": "SJO-ZUSmA001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2466,
        "name": "SJO-ZUSmA006B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2467, "name": "SJO-ZUSmA019A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2468,
        "name": "SJO-ZUSmA021B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2469, "name": "SJO-ZUSmA026B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2470,
        "name": "SJO-ZUSmW001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2471, "name": "SJO-ZUToN017A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2472,
        "name": "SJO-ZUToN201A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2473, "name": "SJO-ZUToN217A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2474,
        "name": "SJO-ZUTrA018B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2475, "name": "SJO-ZUTrA026B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2476,
        "name": "SJO-ZUTrA034B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2477, "name": "SJO-ZUZaA004B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2478,
        "name": "SJO-ZUZaA006B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2479, "name": "SJO-ZUZaA010B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2480,
        "name": "SJO-ZUZaA014A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2481, "name": "SJO-ZUZaA016A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2482,
        "name": "SJO-ZUZaA017B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2483, "name": "SJO-ZUZaA018B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2484,
        "name": "SJO-ZUZaA027B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2485, "name": "SJO-ZUZaA033B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2486,
        "name": "SJO-ZUZaA041B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2487, "name": "SJO-ZUZaA242B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2488,
        "name": "SJO-ZUZaF0101A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2489, "name": "SJO-ZUZaF012A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2490,
        "name": "SJO-ZUZaF101A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2491, "name": "SJO-ZUZaH090A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2492,
        "name": "SJO-ZUZaN002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2493, "name": "SJO-ZUZaN003A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2494,
        "name": "SJO-ZUZaN004A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2495, "name": "SJO-ZUZaN009A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2496,
        "name": "SJO-ZUZaN010A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2497, "name": "SJO-ZUZaN023A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2498,
        "name": "SJO-ZUZaN028A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2499, "name": "SJO-ZUZaN029A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2500,
        "name": "SJO-ZUZaN223A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2501, "name": "SJO-ZUZaW101A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2502,
        "name": "SJO-ZUZaW2003A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2503, "name": "SJO-ZUZaW203A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2504,
        "name": "SJO_ZUZaA019B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2505, "name": "SP AC", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2506,
        "name": "SP Prawo gospodarcze",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2507, "name": "SP Prawo pracy i ub. społ.", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2508,
        "name": "SP Zarz. kap. ludzkim",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2509,
        "name": "KrDUTo1011Ma Konsumencka ocena jakości",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2510,
        "name": "KrDUTo1011Mb Konsumencka ocena jakości",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2511,
        "name": "KrDUTo1011Za Konsumencka ocena jakości",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2512,
        "name": "KrDUTo1011Zb Konsumencka ocena jakości",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2513,
        "name": "KrDUTo1012Ma Konsumencka ocena jakości",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2514,
        "name": "KrDUTo1012Za Konsumencka ocena jakości",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2515,
        "name": "KrDUTo1012Zb Konsumencka ocena jakości",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2516,
        "name": "KrDZZa3011Ma Organizacja i sztuka sprzedaży",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2517,
        "name": "KrDZZa3011Zf Organizacja i sztuka sprzedaży",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2518,
        "name": "KrDZZa3011Zz Organizacja i sztuka sprzedaży",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2519,
        "name": "KrZUZa4001Zz Zarządzanie relacjami z klientem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2520,
        "name": "KrZUZa4002Zz Zarządzanie relacjami z klientem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2521,
        "name": "KrZZZa3011Zf Organizacja i sztuka sprzedaży",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2522,
        "name": "KrZZZa3011Zp Organizacja i sztuka sprzedaży",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2523,
        "name": "KrZZZa3011Zz Organizacja i sztuka sprzedaży",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2524, "name": "KrDZGa3011 Labour Law", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2525,
        "name": "KrDZGa3012 Labour Law",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2526, "name": "KrDZGa3013 Labour Law", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2527,
        "name": "KrDZTr3011Hg Podstawy teorii sportu",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2528,
        "name": "KrDZTr3011Tm Podstawy teorii sportu",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2529,
        "name": "KrDZTr3012Tm Podstawy teorii sportu",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2530,
        "name": "KrDUIs2011Si Trening zdrowotny",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2531,
        "name": "KrZZTr3011Hg Podstawy teorii sportu",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2532,
        "name": "KrZZTr3011Tm Podstawy teorii sportu",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2533,
        "name": "KrZZTr3012Hg Podstawy teorii sportu",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2534,
        "name": "KrZZIs3011Io Zarządzanie zasobami ludzkimi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2535,
        "name": "KrZZIs3011Si Zarządzanie zasobami ludzkimi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2536,
        "name": "KrZZIs3012Io Zarządzanie zasobami ludzkimi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2537,
        "name": "KrZZIs3012Si Zarządzanie zasobami ludzkimi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2538, "name": "KrZUFr4011Fd", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2539,
        "name": "KrZUFr4012Fd",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2540, "name": "KrZUFr4031Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2541,
        "name": "KrZUFr4032Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2542, "name": "KrZUFr4033Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2543,
        "name": "KrZUFr4034Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2544, "name": "KrZUFr4011Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2545,
        "name": "KrZUFr4012Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2546, "name": "KrZUFr4013Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2547,
        "name": "KrZUFr4014Rr",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2548, "name": "KrZUFr4015Rr", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2549,
        "name": "KrZUIe4011In",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2550,
        "name": "KrZZZI4011a Techniki pakowania towarów",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2551,
        "name": "KrZZZI4011b Techniki pakowania towarów",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2552,
        "name": "KrDZGa3011 Matematyka finansowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2553,
        "name": "KrDZGa3012 Matematyka finansowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2554,
        "name": "KrDZGa3013 Matematyka finansowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2555,
        "name": "KrDZGa3011 Rachunkowość budżetowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2556,
        "name": "KrDZGa3012 Rachunkowość budżetowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2557,
        "name": "KrDZGa3013 Rachunkowość budżetowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2558,
        "name": "KrDZTo4011Ha Zarządzanie marką",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2559,
        "name": "KrDZTo4011Hb Zarządzanie marką",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2560,
        "name": "KrDZTo4011Za Zarządzanie marką",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2561,
        "name": "KrDZTo4011Zb Zarządzanie marką",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2562,
        "name": "KrDZTo4012Za Zarządzanie marką",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2563,
        "name": "KrDZTo4012Zb Zarządzanie marką",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2564,
        "name": "KrDZTo4011Ha Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2565,
        "name": "KrDZTo4011Hb Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2566,
        "name": "KrDZTo4011Ma Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2567,
        "name": "KrDZTo4011Mb Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2568,
        "name": "KrDZTo4011Za Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2569,
        "name": "KrDZTo4011Zb Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2570,
        "name": "KrDZTo4012Za Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2571,
        "name": "KrDZTo4012Zb Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2572,
        "name": "KrZZTo4011Za Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2573,
        "name": "KrZZTo4011Zb Kalkulacje finansowe w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2574, "name": "KrDZMg1016", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2575,
        "name": "KrZUFr1035",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2576,
        "name": "KrDUTo1011Ma Systemowe zarządzanie jakością",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2577,
        "name": "KrDUTo1011Mb Systemowe zarządzanie jakością",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2578,
        "name": "KrDUTo1011Za Systemowe zarządzanie jakością",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2579,
        "name": "KrDUTo1011Zb Systemowe zarządzanie jakością",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2580,
        "name": "KrDUTo1012Ma Systemowe zarządzanie jakością",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2581,
        "name": "KrDUTo1012Za Systemowe zarządzanie jakością",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2582,
        "name": "KrDUTo1012Zb Systemowe zarządzanie jakością",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2583,
        "name": "KrZZTo4011Za Satysfakcja klienta w systemach zarządzania",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2584,
        "name": "KrZZTo4011Zb Satysfakcja klienta w systemach zarządzania",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2585,
        "name": "KrZZZI3011a Satysfakcja klienta w systemach zarządzania",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2586,
        "name": "KrZZZI3011b Satysfakcja klienta w systemach zarządzania",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2587,
        "name": "KrZZRc3011Co Audyt marketingowy przedsiębiorstwa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2588,
        "name": "KrZZRc3011Ra Audyt marketingowy przedsiębiorstwa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2589,
        "name": "KrZZRc3012Co Audyt marketingowy przedsiębiorstwa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2590,
        "name": "KrZZRc3012Ra Audyt marketingowy przedsiębiorstwa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2591, "name": "KrDUTo106sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2592,
        "name": "KrZZZI4011a Międzynarodowe porównania gospodarcze",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2593,
        "name": "KrZZZI4011b Międzynarodowe porównania gospodarcze",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2594,
        "name": "KrDZZI4011a Klasyczne i współczesne ujęcia kompetencji pracowniczych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2595,
        "name": "KrDZZI4011b Klasyczne i współczesne ujęcia kompetencji pracowniczych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2596,
        "name": "KrDZZI4012a Klasyczne i współczesne ujęcia kompetencji pracowniczych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2597,
        "name": "KrDZZI4012b Klasyczne i współczesne ujęcia kompetencji pracowniczych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2598,
        "name": "KrDZZI3011a Projektowanie motywacyjnych systemów wynagrodzeń",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2599,
        "name": "KrDZZI3011b Projektowanie motywacyjnych systemów wynagrodzeń",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2600,
        "name": "KrDZZI3012a Projektowanie motywacyjnych systemów wynagrodzeń",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2601,
        "name": "KrDZZI3012b Projektowanie motywacyjnych systemów wynagrodzeń",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2602,
        "name": "KrDZZa3011Ma Marketing internetowy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2603,
        "name": "KrDZZa3011Zf Marketing internetowy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2604,
        "name": "KrDZZa3011Zz Marketing internetowy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2605, "name": "SP Prawo zam. publ. gr.I", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2606,
        "name": "KrZUFr314sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2607, "name": "KrZZMg1213", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2608,
        "name": "KrDUGa1013",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2609, "name": "KrZUGa2211", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2610,
        "name": "KrZUGa2212",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2611,
        "name": "KrDZGa3011 Entrepreneurship and Intrapreneurship in the public sector",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2612,
        "name": "KrDZGa3012 Entrepreneurship and Intrapreneurship in the public sector",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2613,
        "name": "KrDZGa3013 Entrepreneurship and Intrapreneurship in the public sector",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2614,
        "name": "KrZZZI4011a Metody analityczne w ocenie jakości wyrobów",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2615,
        "name": "KrZZZI4011b Metody analityczne w ocenie jakości wyrobów",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2616,
        "name": "KrZZTo4011Za Metody analityczne w ocenie jakości wyrobów",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2617,
        "name": "KrZZTo4011Zb Metody analityczne w ocenie jakości wyrobów",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2618,
        "name": "KrZZRc3011Co Systemy wynagrodzenia i czasu pracy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2619,
        "name": "KrZZRc3011Ra Systemy wynagrodzenia i czasu pracy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2620,
        "name": "KrZZRc3012Co Systemy wynagrodzenia i czasu pracy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2621,
        "name": "KrZZRc3012Ra Systemy wynagrodzenia i czasu pracy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2622,
        "name": "KrDZRc3011Co Rachunkowość finansowa w organizacjach handlowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2623,
        "name": "KrDZRc3011Ra Rachunkowość finansowa w organizacjach handlowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2624,
        "name": "KrDZRc3012Co Rachunkowość finansowa w organizacjach handlowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2625,
        "name": "KrDZRc3012Ra Rachunkowość finansowa w organizacjach handlowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2626,
        "name": "KrDZRc3013Co Rachunkowość finansowa w organizacjach handlowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2627,
        "name": "KrDZRc3013Ra Rachunkowość finansowa w organizacjach handlowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2628, "name": "KrDZSm301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2629,
        "name": "KrDZSm302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2630,
        "name": "KrDZIs3011Io Automatyczna analiza i przetwarzanie informacji tekstowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2631,
        "name": "KrDZIs3011Si Automatyczna analiza i przetwarzanie informacji tekstowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2632,
        "name": "KrDZIs3012Io Automatyczna analiza i przetwarzanie informacji tekstowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2633,
        "name": "KrDZIs3012Si Automatyczna analiza i przetwarzanie informacji tekstowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2634,
        "name": "KrDZIa3011 Data Mining. Concepts, Models and Methods",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2635,
        "name": "KrDZIa3012 Data Mining. Concepts, Models and Methods",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2636,
        "name": "KrDZIs3011Io Analiza danych marketingowych z zastosowaniem programów komputerowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2637,
        "name": "KrDZIs3012Io Analiza danych marketingowych z zastosowaniem programów komputerowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2638,
        "name": "KrDZAg3013 Analiza danych marketingowych z zastosowaniem programów komputerowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2639,
        "name": "KrDUIs2011Si Praktyczne wykorzystanie narzędzi data mining w analitycznm CRM",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2640,
        "name": "KrDZAg3014 Analiza danych marketingowych z zastosowaniem programów komputerowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2641,
        "name": "KrDZIs3011Si Analiza danych marketingowych z zastosowaniem programów komputerowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2642,
        "name": "KrDZIs3012Si Analiza danych marketingowych z zastosowaniem programów komputerowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2643,
        "name": "KrDZTr3011Hg Oferta turystyczna Krakowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2644,
        "name": "KrDZTr3011Tm Oferta turystyczna Krakowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2645,
        "name": "KrDZTr3012Tm Oferta turystyczna Krakowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2646,
        "name": "KrDUTr2011Hg Oferta turystyczna Krakowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2647,
        "name": "KrDUTr2011Tm Oferta turystyczna Krakowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2648,
        "name": "KrZUTr3011Hg Oferta turystyczna Krakowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2649,
        "name": "KrDZGa3011 Przywództwo w administracji publicznej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2650,
        "name": "KrDZGa3012 Przywództwo w administracji publicznej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2651,
        "name": "KrDZGa3013 Przywództwo w administracji publicznej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2652,
        "name": "KrZZIs3011Io Współczesne zachowania organizacyjne",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2653,
        "name": "KrZZIs3011Si Współczesne zachowania organizacyjne",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2654,
        "name": "KrZZIs3012Io Współczesne zachowania organizacyjne",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2655,
        "name": "KrZZIs3012Si Współczesne zachowania organizacyjne",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2656, "name": "KrDZMg1015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2657,
        "name": "KrDZTr3011Hg Turystyka uzdrowiskowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2658,
        "name": "KrDZTr3011Tm Turystyka uzdrowiskowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2659,
        "name": "KrDZTr3012Tm Turystyka uzdrowiskowa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2660,
        "name": "KrDZGa3011 Rekrutacja i nabór w administracji publicznej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2661,
        "name": "KrDZGa3012 Rekrutacja i nabór w administracji publicznej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2662,
        "name": "KrDZGa3013 Rekrutacja i nabór w administracji publicznej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2663,
        "name": "KrDUTo1011Ma Innowacyjność w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2664,
        "name": "KrDUTo1011Mb Innowacyjność w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2665,
        "name": "KrDUTo1011Za Innowacyjność w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2666,
        "name": "KrDUTo1011Zb Innowacyjność w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2667,
        "name": "KrDUTo1012Ma Innowacyjność w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2668,
        "name": "KrDUTo1012Za Innowacyjność w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2669,
        "name": "KrDUTo1012Zb Innowacyjność w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2670,
        "name": "KrDZZa3011Ma Kierowanie zespołami pracowniczymi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2671,
        "name": "KrDZZa3011Zf Kierowanie zespołami pracowniczymi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2672,
        "name": "KrDZZa3011Zz Kierowanie zespołami pracowniczymi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2673,
        "name": "KrDZIa3011 Intercultural Communication",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2674,
        "name": "KrDZIa3012 Intercultural Communication",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2675,
        "name": "KrDZTo4011Ha Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2676,
        "name": "KrDZTo4011Hb Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2677,
        "name": "KrDZTo4011Ma Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2678,
        "name": "KrDZTo4011Mb Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2679,
        "name": "KrDZTo4011Za Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2680,
        "name": "KrDZTo4011Zb Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2681,
        "name": "KrDZTo4012Za Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2682,
        "name": "KrDZTo4012Zb Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2683,
        "name": "KrZZTo4011Za Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2684,
        "name": "KrZZTo4011Zb Rola towaroznawcy w rozpatrywaniu reklamacji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2685,
        "name": "KrZZTr3011Hg Coaching i mentoring",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2686,
        "name": "KrZZTr3011Tm Coaching i mentoring",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2687,
        "name": "KrZZTr3012Hg Coaching i mentoring",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2688,
        "name": "KrDUIe2011Mo Coaching i mentoring",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2689,
        "name": "KrDUIe2012Mo Coaching i mentoring",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2690,
        "name": "KrZZZa3011Zf Coaching i mentoring",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2691,
        "name": "KrZZZa3011Zp Coaching i mentoring",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2692,
        "name": "KrZZZa3011Zz Coaching i mentoring",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2693,
        "name": "KrDUTr2011Hg Zarządzanie działem sprzedaży firmy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2694,
        "name": "KrDUTr2011Tm Zarządzanie działem sprzedaży firmy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2695,
        "name": "KrDZZI4011a Wielokryterialne metody podejmowania decyzji i ich zastosowanie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2696,
        "name": "KrDZZI4011b Wielokryterialne metody podejmowania decyzji i ich zastosowanie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2697,
        "name": "KrDZZI4012a Wielokryterialne metody podejmowania decyzji i ich zastosowanie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2698,
        "name": "KrDZZI4012b Wielokryterialne metody podejmowania decyzji i ich zastosowanie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2699,
        "name": "KrZZZI3011a Zarządzanie projektami",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2700,
        "name": "KrZZZI3011b Zarządzanie projektami",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2701,
        "name": "KrZZTo3011Ha Wielokryterialne metody podejmowania decyzji i ich zastosowanie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2702,
        "name": "KrZZTo3011Za Wielokryterialne metody podejmowania decyzji i ich zastosowanie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2703,
        "name": "KrDZTo4011Ha Żywność ekologiczna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2704,
        "name": "KrDZTo4011Hb Żywność ekologiczna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2705,
        "name": "KrDZTo4011Ma Żywność ekologiczna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2706,
        "name": "KrDZTo4011Mb Żywność ekologiczna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2707,
        "name": "KrDZTo4011Za Żywność ekologiczna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2708,
        "name": "KrDZTo4011Zb Żywność ekologiczna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2709,
        "name": "KrDZTo4012Za Żywność ekologiczna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2710,
        "name": "KrDZTo4012Zb Żywność ekologiczna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2711,
        "name": "KrDUIe2011Mo Programowanie aplikacji webowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2712,
        "name": "KrDUIe2012Mo Programowanie aplikacji webowych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2713,
        "name": "KrZUIs3011Si System informacji marketingowej w przedsiębiorstwie",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2714,
        "name": "KrZZTo4011Za Praktyczne aspekty wdrażania i integracji systemów zarządzania",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2715,
        "name": "KrZZTo4011Zb Praktyczne aspekty wdrażania i integracji systemów zarządzania",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2716,
        "name": "KrDZIs3011Io Biznesplan - model najlepszych praktyk",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2717,
        "name": "KrDZIs3011Si Biznesplan - model najlepszych praktyk",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2718,
        "name": "KrDZIs3012Io Biznesplan - model najlepszych praktyk",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2719,
        "name": "KrDZIs3012Si Biznesplan - model najlepszych praktyk",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2720,
        "name": "KrDZIa3011 Mobile Systems Programming",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2721,
        "name": "KrDZIa3012 Mobile Systems Programming",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2722,
        "name": "KrDZGa3011 Metody i narzędzia zarządzania finansami publicznymi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2723,
        "name": "KrDZGa3012 Metody i narzędzia zarządzania finansami publicznymi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2724,
        "name": "KrDZGa3013 Metody i narzędzia zarządzania finansami publicznymi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2725,
        "name": "KrDZTo4011Ha Nowoczesne technologie w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2726,
        "name": "KrDZTo4011Hb Nowoczesne technologie w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2727,
        "name": "KrDZTo4011Ma Nowoczesne technologie w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2728,
        "name": "KrDZTo4011Mb Nowoczesne technologie w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2729,
        "name": "KrDZTo4011Za Nowoczesne technologie w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2730,
        "name": "KrDZTo4011Zb Nowoczesne technologie w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2731,
        "name": "KrDZTo4012Za Nowoczesne technologie w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2732,
        "name": "KrDZTo4012Zb Nowoczesne technologie w produkcji żywności",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2733,
        "name": "KrDZTo4012Za Technologia informacyjna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2734,
        "name": "KrDZTo4012Zb Technologia informacyjna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2735,
        "name": "KrDZTo4011Ha Technologia informacyjna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2736,
        "name": "KrDZTo4011Hb Technologia informacyjna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2737,
        "name": "KrDZTo4011Ma Technologia informacyjna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2738,
        "name": "KrDZTo4011Mb Technologia informacyjna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2739,
        "name": "KrDZTo4011Za Technologia informacyjna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2740,
        "name": "KrDZTo4011Zb Technologia informacyjna",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2741, "name": "KrDUFr222sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2742,
        "name": "KrZUFr338sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2743,
        "name": "KrDZRc3011Co Podstawy inżynierii finansowej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2744,
        "name": "KrDZRc3011Ra Podstawy inżynierii finansowej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2745,
        "name": "KrDZRc3012Co Podstawy inżynierii finansowej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2746,
        "name": "KrDZRc3012Ra Podstawy inżynierii finansowej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2747,
        "name": "KrDZRc3013Co Podstawy inżynierii finansowej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2748,
        "name": "KrDZRc3013Ra Podstawy inżynierii finansowej",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2749, "name": "KrDZFr318sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2750,
        "name": "KrZZTo4011Za Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2751,
        "name": "KrZZTo4011Zb Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2752,
        "name": "KrDZTo4011Ha Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2753,
        "name": "KrDZTo4011Hb Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2754,
        "name": "KrDZTo4011Ma Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2755,
        "name": "KrDZTo4011Mb Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2756,
        "name": "KrDZTo4011Za Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2757,
        "name": "KrDZTo4011Zb Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2758,
        "name": "KrDZTo4012Za Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2759,
        "name": "KrDZTo4012Zb Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2760,
        "name": "KrZZTo3011Za Zachowania konsumentów na rynku",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2761,
        "name": "KrDZGa3011 Public relations w administracji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2762,
        "name": "KrDZGa3012 Public relations w administracji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2763,
        "name": "KrDZGa3013 Public relations w administracji",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2764, "name": "KrDZZa301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2765,
        "name": "KrDUAg2011Am Zastosowanie kopuli w agregacji ryzyka",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2766,
        "name": "KrDUAg2011Au Zastosowanie kopuli w agregacji ryzyka",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2767,
        "name": "KrZUZa4001Zz Sztuka wystąpień publicznych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2768,
        "name": "KrZUZa4002Zz Sztuka wystąpień publicznych",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2769,
        "name": "KrDZAg3013 Międzynarodowy rynek finansowy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2770,
        "name": "KrDZAg3014 Międzynarodowy rynek finansowy",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2771, "name": "KrDZEp302sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2772,
        "name": "KrDZGa3011 Social Entrepreneurship",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2773,
        "name": "KrDZGa3012 Social Entrepreneurship",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2774,
        "name": "KrDZGa3013 Social Entrepreneurship",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2775, "name": "CMBA II ed ogólna", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2776,
        "name": "CMBAI  spec Human Resource Man",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2777, "name": "CMBAI spec Managerial Comunic", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2778,
        "name": "SJO-AdA082A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2779, "name": "SJO-AdH212A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2780,
        "name": "SJO-AdW033A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2781, "name": "SJO-AgA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2782,
        "name": "SJO-AgA001B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2783, "name": "SJO-AgA001C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2784,
        "name": "SJO-AgA002B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2785, "name": "SJO-AgA019A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2786,
        "name": "SJO-AgA090B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2787, "name": "SJO-EkA048A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2788,
        "name": "SJO-EkA067B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2789, "name": "SJO-EkCh001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2790,
        "name": "SJO-EpA047B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2791, "name": "SJO-FrA036B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2792,
        "name": "SJO-GaA001B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2793, "name": "SJO-GaA045B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2794,
        "name": "SJO-GaA058B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2795, "name": "SJO-GaA081B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2796,
        "name": "SJO-GaF008A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2797, "name": "SJO-GiA002B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2798,
        "name": "SJO-GiA017B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2799, "name": "SJO-GiA023A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2800,
        "name": "SJO-GiA063B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2801, "name": "SJO-IsA002B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2802,
        "name": "SJO-IsA005B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2803, "name": "SJO-IsA015A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2804,
        "name": "SJO-IsA367B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2805, "name": "SJO-MaA001C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2806,
        "name": "SJO-MaA003B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2807, "name": "SJO-MgA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2808,
        "name": "SJO-MgA057B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2809, "name": "SJO-MrA001C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2810,
        "name": "SJO-MrA002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2811, "name": "SJO-MrA005B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2812,
        "name": "SJO-MrH006A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2813, "name": "SJO-MWCh001A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2814,
        "name": "SJO-MWR001A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2815, "name": "SJO-MWW005A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2816,
        "name": "SJO-RcA002B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2817, "name": "SJO-RcA004B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2818,
        "name": "SJO-RcA004B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2819, "name": "SJO-RcW044A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2820,
        "name": "SJO-SmA002B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2821, "name": "SJO-SmA003B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2822,
        "name": "SJO-SmA203A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2823, "name": "SJO-SZIsA304A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2824,
        "name": "SJO-SZRcA201A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2825, "name": "SJO-SZSmA308A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2826,
        "name": "SJO-SZToA209A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2827, "name": "SJO-SZZiA243B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2828,
        "name": "SJO-ToA061B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2829, "name": "SJO-ToA072A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2830,
        "name": "SJO-ToW007A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2831, "name": "SJO-TrA001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2832,
        "name": "SJO-TrA002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2833, "name": "SJO-TrA043B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2834,
        "name": "SJO-ZaA063B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2835, "name": "SJO-ZaA089B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2836,
        "name": "SJO-ZaCh001A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2837, "name": "SJO-ZiA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2838,
        "name": "SJO-ZiA237B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2839, "name": "SJO-ZiA243B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2840,
        "name": "SJO-ZiH300A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2841, "name": "SJO-ZiH401A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2842,
        "name": "SP Doradztwo podatkowe2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2843, "name": "SP Doradztwo podatkowe3", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2844,
        "name": "SP KF RiF A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2845, "name": "SP KF RiF B", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2846,
        "name": "SP KF RiF C",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2847, "name": "SP KF RiF D", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2848,
        "name": "SP KF RiF E",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2849, "name": "SP KF RiF F", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2850,
        "name": "SJO-EpKA302B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2851, "name": "SJO-SWA368B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2852,
        "name": "SJO-SZFrA340B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2853, "name": "SJO-ZaW202A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2854,
        "name": "SJO-FrN044A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2855,
        "name": "Doktoranckie dzienne GAP 2 rok",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2856, "name": "SJO-SZFrN227A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2857,
        "name": "SJO-FrA205C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2858, "name": "SJO-SWN262A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2859,
        "name": "SJO-SWA370B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2860, "name": "SJO-FrW204A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2861,
        "name": "SJO-ZaN229A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2862, "name": "SJO-EKN230A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2863,
        "name": "MWN202A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2864, "name": "SJO-SZFrN226A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2865,
        "name": "SJO-EpKA301B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2866, "name": "SJO-FrF210A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2867,
        "name": "SJO-SZFrN301A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2868, "name": "SJO-EkN010A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2869,
        "name": "SJO-SZFrA204A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2870, "name": "SJO-SZGiA248B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2871,
        "name": "SJO-SZIsA246B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2872, "name": "SJO-SZMgA220A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2873,
        "name": "SJO-SZRcA219B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2874, "name": "SJO-SZSmA211B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2875,
        "name": "SJO-SZToN401A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2876, "name": "SJO-SZZaA258A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2877,
        "name": "SJO-SZZiA341B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2878, "name": "SJO-ZaN064A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2879,
        "name": "SJO-ZiN401A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2880, "name": "KrDUGa210sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2881,
        "name": "KrZUFr401sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2882, "name": "KrZUFr303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2883,
        "name": "KrDZSm310sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2884, "name": "KrDZSm303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2885,
        "name": "KrZZAd303sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2886, "name": "KrDZGp301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2887,
        "name": "KrDUGp202sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2888, "name": "KrDZFr307sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2889,
        "name": "KrDUAg201sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2890, "name": "KrZZSm302sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2891,
        "name": "KrDUGa207sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2892, "name": "KrDZSm305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2893,
        "name": "KrDZSm309sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2894, "name": "KrZZEk307sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2895,
        "name": "KrZUEk3212Pi",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2896, "name": "SJO-DUEkN012A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2897,
        "name": "SJO-DUFrN003B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2898, "name": "SJO-DUFrN006B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2899,
        "name": "SJO-DUFrN008A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2900, "name": "SJO-DURcN016A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2901,
        "name": "SJO-DUZaN002B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2902, "name": "SJO-EkN055A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2903,
        "name": "SJO-EkN077B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2904, "name": "SJO-EkN099A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2905,
        "name": "SJO-FrF002A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2906, "name": "SJO-FrF002A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2907,
        "name": "SJO-FrN066A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2908, "name": "SJO-GaA0058B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2909,
        "name": "SJO-GaA058B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2910, "name": "SJO-MWN047B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2911,
        "name": "SJO-SZAdA025A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2912, "name": "SJO-SZEkA043A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2913,
        "name": "SJO-SZFrA010A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2914, "name": "SJO-SZFrA011A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2915,
        "name": "SJO-SZFrA015A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2916, "name": "SJO-SZFrA016A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2917,
        "name": "SJO-SZFrA018A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2918, "name": "SJO-SZFrA019A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2919,
        "name": "SJO-SZGiA010A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2920, "name": "SJO-SZIsA049A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2921,
        "name": "SJO-SZIsA301A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2922, "name": "SJO-SZMgA008A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2923,
        "name": "SJO-SZMrA001A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2924, "name": "SJO-SZRcA020A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2925,
        "name": "SJO-SZRcA021A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2926, "name": "SJO-SZToA010A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2927,
        "name": "SJO-SZToA011A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2928, "name": "SJO-SZTrA049A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2929,
        "name": "SJO-SZTrA352B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2930, "name": "SJO-SZZaA010A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2931,
        "name": "SJO-SZZiA011A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2932, "name": "SJO-ZaN088A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2933,
        "name": "SJO-ZUFrN021A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2934, "name": "SJO-ZURc015A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2935,
        "name": "SJO-ZURcN012A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2936, "name": "SJO-ZURcN044A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2937,
        "name": "St.Ped. IIIsem. 1 grupa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2938, "name": "St.Ped. IIIsem. 2 grupa", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2939,
        "name": "St.Ped. Isem. 1 grupa",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2940, "name": "St.Ped. Isem. 2 grupa", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2941,
        "name": "KrDZTr302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2942, "name": "KrDZGa304sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2943,
        "name": "SJO-SZTrW303A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2944, "name": "KrZUGa301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2945,
        "name": "KrDZZa307sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2946, "name": "KrDUGa201sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2947,
        "name": "KrDUZa212sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2948, "name": "KrDUGa204sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2949,
        "name": "KrDZSc3001Ps Ekonomiczna analiza funkcjonowania miast",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 2950,
        "name": "KrDZSc3001Si Ekonomiczna analiza funkcjonowania miast",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2951, "name": "KrDZEk306sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2952,
        "name": "KrZUFr326sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2953, "name": "KrDUZa206sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2954,
        "name": "KrDURc207sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2955, "name": "KrZURc304sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2956,
        "name": "KrDUGp204sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2957, "name": "KrDZZa304sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2958,
        "name": "KrZZTr306sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2959, "name": "KrZZZa305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2960,
        "name": "KrZZRc305sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2961, "name": "KrZZTr302sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2962,
        "name": "KrZZZa302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2963, "name": "KrDZGa303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2964,
        "name": "SJO-DUAgA001C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2965, "name": "SJO-DUAgA002B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2966,
        "name": "SJO-DUEkA002B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2967, "name": "SJO-DUEkA037B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2968,
        "name": "SJO-DUEkA074B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2969, "name": "SJO-DUEkF010A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2970,
        "name": "SJO-DUEkFr005A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2971, "name": "SJO-DUEKH001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2972,
        "name": "SJO-DUFrA001B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2973, "name": "SJO-DUFrA020B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2974,
        "name": "SJO-DUFrH002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2975, "name": "SJO-DUIsA001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2976,
        "name": "SJO-DUIsA004B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2977, "name": "SJO-DUMrA002B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2978,
        "name": "SJO-DUMrA003B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2979, "name": "SJO-DUMrrA002B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2980,
        "name": "SJO-DUMWF002A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2981, "name": "SJO-DUMWF003B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2982,
        "name": "SJO-DUMWH010B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2983, "name": "SJO-DUMWH011B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2984,
        "name": "SJO-DUMWN008B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2985, "name": "SJO-DUMWR001B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2986,
        "name": "SJO-DUMWW001A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2987, "name": "SJO-DUMWW002A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2988,
        "name": "SJO-DURcA003B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2989, "name": "SJO-DURcH007A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2990,
        "name": "SJO-DUZAF004A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2991, "name": "SJO-DUZaH004A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2992,
        "name": "SJO-DUZaR003A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2993, "name": "SJO-DUZaW001A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2994,
        "name": "SJO-EkA043B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2995, "name": "SJO-EkA044B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2996,
        "name": "SJO-EkA045B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2997, "name": "SJO-EkF006B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 2998,
        "name": "SJO-EkF010A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 2999, "name": "SJO-EkR007A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3000,
        "name": "SJO-EkW010A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3001, "name": "SJO-FrA039B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3002,
        "name": "SJO-FrA050C1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3003, "name": "SJO-FrW010A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3004,
        "name": "SJO-IsA034B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3005, "name": "SJO-MWR001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3006,
        "name": "SJO-SZMgA233B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3007, "name": "SJO-SZRcW020A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3008,
        "name": "SJO-SZZaW006A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3009, "name": "SJO-ZaA007B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3010,
        "name": "SJO-ZaA021B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3011, "name": "SJO-ZaF011A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3012,
        "name": "SJO-ZaW010A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3013, "name": "SJO-ZiW388A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3014,
        "name": "KrDZTo402sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3015, "name": "KrZZTr303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3016,
        "name": "KrDZAd301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3017, "name": "KrDUZa210sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3018,
        "name": "KrZZZI401sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3019, "name": "KrDUGa202sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3020,
        "name": "KrZZMg303sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3021, "name": "KrZZFr305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3022,
        "name": "KrDUFr208sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3023, "name": "KrZZGi302sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3024,
        "name": "KrDZZI404sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3025, "name": "KrDUZI103sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3026,
        "name": "KrDUZa209sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3027, "name": "KrZUZa308sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3028,
        "name": "KrDUGp206sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3029, "name": "KrDZRc302sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3030,
        "name": "KrZZEk304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3031, "name": "KrDUIe201sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3032,
        "name": "KrDUIe202sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3033, "name": "KrDUIe203sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3034,
        "name": "KrDUIe204sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3035, "name": "KrDUIs201sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3036,
        "name": "KrDUIs202sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3037, "name": "KrDZIa301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3038,
        "name": "KrDZIa302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3039, "name": "KrDZIa303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3040,
        "name": "KrDZIs301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3041, "name": "KrDZIs302sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3042,
        "name": "KrDZIs303sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3043, "name": "KrDZIs304sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3044,
        "name": "KrDZIs305sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3045, "name": "KrDZIs306sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3046,
        "name": "KrDZIs307sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3047, "name": "KrDZIs308sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3048,
        "name": "KrZUIs301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3049, "name": "KrZZIs301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3050,
        "name": "KrZZIs302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3051, "name": "KrZZIs303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3052,
        "name": "KrZZIs304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3053, "name": "KrZZIs305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3054,
        "name": "KrZZIs306sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3055, "name": "SJO-DUMWR001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3056,
        "name": "SJO-DUZaN008B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3057, "name": "SJO-SZEkA001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3058,
        "name": "SJO-SZEkA010B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3059, "name": "SJO-SZFrA005B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3060,
        "name": "SJO-SZMrA004B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3061, "name": "SJO-SZTrN016A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3062,
        "name": "SJO-SZZaA001B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3063, "name": "SJO-SZZaA001B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3064,
        "name": "SJO-ZaN077A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3065, "name": "KrZZRc304sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3066,
        "name": "KrZZZa306sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3067, "name": "KrZUFr302sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3068,
        "name": "KrZZFr301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3069, "name": "KrDUTr204sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3070,
        "name": "KrZZGi301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3071, "name": "KrDUZa201sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3072,
        "name": "KrDUTr203sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3073, "name": "KSB Rach i fin dla pocz D", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3074,
        "name": "KrDZFr304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3075, "name": "KrDZRc307sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3076,
        "name": "KrDZTo406sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3077, "name": "KrDUSm202sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3078,
        "name": "KrDURc212sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3079, "name": "KrDZAg304sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3080,
        "name": "KrDUTo104sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3081, "name": "KrDUAg202sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3082,
        "name": "KrDZFr312sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3083, "name": "KrZZAd306sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3084,
        "name": "KrZZFr318sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3085, "name": "SJ0-SZFrA035B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3086,
        "name": "KrDZAg303sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3087, "name": "KrZURc303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3088,
        "name": "KrZUIs1012",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3089, "name": "KrZURc1015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3090,
        "name": "KrZURc2014",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3091, "name": "KrZURc2015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3092,
        "name": "KrZUZa1015",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3093, "name": "SJO-ZUZaA001C1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3094,
        "name": "KSB Ekonomika i zarz firmami A",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3095, "name": "KrZUFr304sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3096,
        "name": "KrDUSm201sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3097, "name": "KrDZFr310sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3098,
        "name": "KrZZFr310sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3099, "name": "KrZUFr317sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3100,
        "name": "KrZUFr407sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3101, "name": "KrDZAg305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3102,
        "name": "KrDUAg203sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3103, "name": "KrZZTo402sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3104,
        "name": "KrDZEk309sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3105, "name": "KrDUFr223sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3106,
        "name": "KrDUZa203sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3107, "name": "KrZZFr330sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3108,
        "name": "KrZUIs2011",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3109, "name": "KrZUIs2012", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3110,
        "name": "SJO-DUZaN007B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3111, "name": "SJO-EpKA302B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3112,
        "name": "SJO-SZToA001B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3113, "name": "SJO-SZZaN028A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3114,
        "name": "SJO-ZUFr005AB1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3115, "name": "SJO-ZUFrA005B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3116,
        "name": "SJO-ZUFrA007B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3117, "name": "SJO-ZUFrA008B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3118,
        "name": "SJO-ZUGaF009B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3119, "name": "SJO-ZUMrA010B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3120,
        "name": "SJO-ZUMrA011B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3121, "name": "SJO-ZURcA010B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3122,
        "name": "SJO-ZURcA011B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3123, "name": "KSB Zarządzanie personelem A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3124,
        "name": "KrZUSm302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3125, "name": "KrZZSm303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3126,
        "name": "KrZZFr307sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3127, "name": "KrZUFr312sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3128,
        "name": "KrDZFr308sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3129, "name": "KrDZTo305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3130,
        "name": "KrDZEp304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3131, "name": "KrDZFr316sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3132,
        "name": "KrDUFr220sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3133, "name": "KrZZFr325sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3134,
        "name": "KrZUFr336sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3135, "name": "SJ0-DUMWN005B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3136,
        "name": "KrZUFr1026",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3137, "name": "KrDZTr306sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3138,
        "name": "KrDUFr217sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3139, "name": "KrDUTr201sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3140,
        "name": "KrDZEk3002Sb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3141, "name": "KSB RiF zaaw Częstochowa A", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3142,
        "name": "KrDZSm307sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3143, "name": "KrZUFr331sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3144,
        "name": "KrZZFr321sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3145, "name": "SJO-SZFrA002B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3146,
        "name": "SJO-SZRcA021B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3147, "name": "SJO-SZZaA028B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3148,
        "name": "SJO-ZUEkA019B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3149, "name": "SJO-ZUGaA009B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3150,
        "name": "KrDZMg309sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3151, "name": "KrDZTo303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3152,
        "name": "KrDZSc302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3153, "name": "KrZUZa303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3154,
        "name": "KrZUTr301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3155, "name": "KrDZTo410sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3156,
        "name": "KrDZTo304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3157, "name": "KrDZFr317sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3158,
        "name": "KrZZFr323sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3159, "name": "KrZUSm301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3160,
        "name": "KrDZSc304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3161, "name": "KrDUGa203sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3162,
        "name": "KrZZZa304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3163, "name": "KrDZZI405sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3164,
        "name": "KrDZTo310sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3165, "name": "KrDUZa205sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3166,
        "name": "KrZZAd302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3167, "name": "KrDUFr214sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3168,
        "name": "KrZUFr325sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3169,
        "name": "NtZZZa3011Fr Restrukturyzacja przedsiębiorstw",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3170, "name": "KrDZSc303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3171,
        "name": "KrZUFr337sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3172, "name": "KrZUFr404sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3173,
        "name": "KrDZZI301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3174, "name": "KrZZTo403sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3175,
        "name": "KrZZFr1221 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3176,
        "name": "KrZZFr1222 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3177,
        "name": "KrZZFr1223 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3178,
        "name": "KrZZFr1224 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3179,
        "name": "KrZZFr1225 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3180,
        "name": "KrDZFr3011Bk Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3181,
        "name": "KrDZFr3011Fd Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3182,
        "name": "KrDZFr3011Rn Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3183,
        "name": "KrDZFr3011Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3184,
        "name": "KrDZFr3012Fd Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3185,
        "name": "KrDZFr3012Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3186,
        "name": "KrDZFr3013Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3187,
        "name": "KrDZFr3014Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3188,
        "name": "KrZUFr2201 Finanse gospodarstw domowych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3189,
        "name": "KrZUFr2202 Finanse gospodarstw domowych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3190,
        "name": "KrZUFr1021 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3191,
        "name": "KrZUFr1022 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3192,
        "name": "KrZUFr1023 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3193,
        "name": "KrZUFr1024 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3194,
        "name": "KrZUFr1025 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3195,
        "name": "KrZUFr1031 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3196,
        "name": "KrZUFr1032 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3197,
        "name": "KrZUFr1033 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3198,
        "name": "KrZZFr3211Bk Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3199,
        "name": "KrZZFr3211Rn Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3200,
        "name": "KrZZFr3211Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3201,
        "name": "KrZZFr3212Bk Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3202,
        "name": "KrZZFr3212Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3203,
        "name": "KrZZFr3213Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3204,
        "name": "KrZZFr3214Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3205,
        "name": "KrZZFr3221Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3206,
        "name": "KrZZFr3222Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3207,
        "name": "KrZZFr3223Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3208,
        "name": "KrDUGp1011 Polityka ekologiczna w rozwoju regionalnym (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3209,
        "name": "KrDUGp1012 Polityka ekologiczna w rozwoju regionalnym (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3210,
        "name": "KrDUFr1013 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3211,
        "name": "KrDUFr1014 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3212,
        "name": "KrDUFr1011 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3213,
        "name": "KrDUFr1012 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3214,
        "name": "KrDUFr1015 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3215,
        "name": "KrDUFr1021 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3216,
        "name": "KrDUFr1022 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3217,
        "name": "KrDUFr1023 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3218,
        "name": "KrDUFr1024 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3219,
        "name": "KrDUFr1025 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3220,
        "name": "KrZUFr1011 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3221,
        "name": "KrZUFr1012 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3222,
        "name": "KrZUFr1013 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3223,
        "name": "KrZUFr1014 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3224,
        "name": "KrZUFr1015 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3225,
        "name": "KrZZFr1211 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3226,
        "name": "KrZZFr1212 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3227,
        "name": "KrZZFr1213 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3228,
        "name": "KrZZFr1214 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3229,
        "name": "KrZZFr1215 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3230,
        "name": "KrDZFr1021 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3231,
        "name": "KrDZFr1022 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3232,
        "name": "Doktoranckie dzienne  WE 1 rok Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3233,
        "name": "Doktoranckie dzienne  WF 1 rok Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3234,
        "name": "Doktoranckie dzienne  WT 1 rok Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3235,
        "name": "Doktoranckie dzienne  WZ 1 rok Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3236,
        "name": "KrDZFr3011Bk Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3237,
        "name": "KrDZFr3011Fd Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3238,
        "name": "KrDZFr3011Rn Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3239,
        "name": "KrDZFr3011Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3240,
        "name": "KrDZFr3012Fd Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3241,
        "name": "KrDZFr3012Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3242,
        "name": "KrDZFr3013Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3243,
        "name": "KrDZFr3014Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3244,
        "name": "NtZZFr3001Fd Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3245,
        "name": "NtZZFr3001Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3246,
        "name": "KrDZFr3011Bk Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3247,
        "name": "KrDZFr3011Fd Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3248,
        "name": "KrDZFr3011Rn Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3249,
        "name": "KrDZFr3011Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3250,
        "name": "KrDZFr3012Fd Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3251,
        "name": "KrDZFr3012Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3252,
        "name": "KrDZFr3013Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3253,
        "name": "KrDZFr3014Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3254,
        "name": "KrZZFr3211Bk Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3255,
        "name": "KrZZFr3211Rn Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3256,
        "name": "KrZZFr3211Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3257,
        "name": "KrZZFr3212Bk Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3258,
        "name": "KrZZFr3212Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3259,
        "name": "KrZZFr3213Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3260,
        "name": "KrZZFr3214Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3261,
        "name": "KrZZFr3221Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3262,
        "name": "KrZZFr3222Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3263,
        "name": "KrZZFr3223Rr Filozofia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3264,
        "name": "KrDZFr1011 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3265,
        "name": "KrDZFr1012 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3266,
        "name": "KrDZFr1013 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3267,
        "name": "KrDZFr1014 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3268,
        "name": "KrDZFr1015 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3269,
        "name": "KrDZFr1023 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3270,
        "name": "KrDZFr1024 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3271,
        "name": "KrDZFr1025 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3272, "name": "KrZZFr313sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3273,
        "name": "KrDUFr1031 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3274,
        "name": "KrDUFr1032 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3275,
        "name": "KrDUFr1033 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3276,
        "name": "KrDUFr1034 Ekonomia matematyczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3277,
        "name": "KrDZFr3011Bk Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3278,
        "name": "KrDZFr3011Fd Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3279,
        "name": "KrDZFr3011Rn Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3280,
        "name": "KrDZFr3011Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3281,
        "name": "KrDZFr3012Fd Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3282,
        "name": "KrDZFr3012Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3283,
        "name": "KrDZFr3013Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3284,
        "name": "KrDZFr3014Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3285,
        "name": "KrZZFr3111Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3286,
        "name": "KrZZFr3211Bk Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3287,
        "name": "KrZZFr3211Rn Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3288,
        "name": "KrZZFr3211Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3289,
        "name": "KrZZFr3212Bk Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3290,
        "name": "KrZZFr3212Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3291,
        "name": "KrZZFr3213Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3292,
        "name": "KrZZFr3214Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3293,
        "name": "KrZZFr3221Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3294,
        "name": "KrZZFr3222Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3295,
        "name": "KrZZFr3223Rr Programowanie i finansowanie rozwoju regionalnego (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3296,
        "name": "NtZZFr3001Fd Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3297,
        "name": "NtZZFr3001Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3298,
        "name": "KrZZFr3111Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3299,
        "name": "KrZZFr3211Bk Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3300,
        "name": "KrZZFr3211Rn Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3301,
        "name": "KrZZFr3211Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3302,
        "name": "KrZZFr3212Bk Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3303,
        "name": "KrZZFr3212Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3304,
        "name": "KrZZFr3213Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3305,
        "name": "KrZZFr3214Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3306,
        "name": "KrZZFr3221Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3307,
        "name": "KrZZFr3222Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3308,
        "name": "KrZZFr3223Rr Historia gospodarcza (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3309,
        "name": "NtZZFr1001 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3310,
        "name": "NtZZFr1002 Podstawy organizacji i zarządzania (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3311,
        "name": "KrDUGp2011 Międzynarodowe stosunki gospodarcze (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3312,
        "name": "KrDUGp2012 Międzynarodowe stosunki gospodarcze (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3313,
        "name": "KrDUGp2013 Międzynarodowe stosunki gospodarcze (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3314,
        "name": "KrZUFr2201 Finanse lokalne (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3315,
        "name": "KrZUFr2202 Finanse lokalne (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3316,
        "name": "KrDUGp2011 Przedsiębiorczość i innowacje (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3317,
        "name": "KrDUGp2012 Przedsiębiorczość i innowacje (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3318,
        "name": "KrDUGp2013 Przedsiębiorczość i innowacje (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3319,
        "name": "KrDZFr3011Bk Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3320,
        "name": "KrDZFr3011Fd Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3321,
        "name": "KrDZFr3011Rn Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3322,
        "name": "KrDZFr3011Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3323,
        "name": "KrDZFr3012Fd Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3324,
        "name": "KrDZFr3012Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3325,
        "name": "KrDZFr3013Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3326,
        "name": "KrDZFr3014Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3327,
        "name": "NtZZFr3001Fd Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3328,
        "name": "NtZZFr3001Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3329,
        "name": "KrZZFr3211Bk Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3330,
        "name": "KrZZFr3211Rn Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3331,
        "name": "KrZZFr3211Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3332,
        "name": "KrZZFr3212Bk Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3333,
        "name": "KrZZFr3212Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3334,
        "name": "KrZZFr3213Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3335,
        "name": "KrZZFr3214Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3336,
        "name": "KrZZFr3221Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3337,
        "name": "KrZZFr3222Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3338,
        "name": "KrZZFr3223Rr Metody oceny projektów gospodarczych (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3339,
        "name": "KrDUGp1011 Rozwój trwały i zrównoważony (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3340,
        "name": "KrDUGp1012 Rozwój trwały i zrównoważony (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3341,
        "name": "KrDUFr1031 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3342,
        "name": "KrDUFr1032 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3343,
        "name": "KrDUFr1023 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3344,
        "name": "KrDUFr1024 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3345,
        "name": "KrDUFr1033 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3346,
        "name": "KrDUFr1034 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3347,
        "name": "KrDUFr1025 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3348,
        "name": "KrDUFr1021 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3349,
        "name": "KrDUFr1022 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3350,
        "name": "KrZUFr1021 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3351,
        "name": "KrZUFr1022 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3352,
        "name": "KrZUFr1025 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3353,
        "name": "KrZUFr1023 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3354,
        "name": "KrZUFr1024 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3355,
        "name": "KrZUFr1011 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3356,
        "name": "KrZUFr1012 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3357,
        "name": "KrZUFr1013 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3358,
        "name": "KrZUFr1014 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3359,
        "name": "KrZUFr1015 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3360,
        "name": "KrDZFr3011Bk Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3361,
        "name": "KrDZFr3011Fd Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3362,
        "name": "KrDZFr3011Rn Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3363,
        "name": "KrDZFr3011Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3364,
        "name": "KrDZFr3012Fd Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3365,
        "name": "KrDZFr3012Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3366,
        "name": "KrDZFr3013Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3367,
        "name": "KrDZFr3014Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3368,
        "name": "KrZZFr3211Bk Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3369,
        "name": "KrZZFr3211Rn Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3370,
        "name": "KrZZFr3211Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3371,
        "name": "KrZZFr3212Bk Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3372,
        "name": "KrZZFr3212Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3373,
        "name": "KrZZFr3213Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3374,
        "name": "KrZZFr3214Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3375,
        "name": "KrZZFr3221Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3376,
        "name": "KrZZFr3222Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3377,
        "name": "KrZZFr3223Rr Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3378,
        "name": "Doktoranckie dzienne  WE 1 rok Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3379,
        "name": "Doktoranckie dzienne  WF 1 rok Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3380,
        "name": "Doktoranckie dzienne  WT 1 rok Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3381,
        "name": "Doktoranckie dzienne  WZ 1 rok Psychologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3382,
        "name": "KrDUFr1013 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3383,
        "name": "KrDUFr1014 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3384,
        "name": "KrDUFr1011 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3385,
        "name": "KrDUFr1012 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3386,
        "name": "KrDUFr1015 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3387,
        "name": "KrZUFr1035 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3388,
        "name": "KrZUFr1031 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3389,
        "name": "KrZUFr1032 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3390,
        "name": "KrZUFr1033 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3391,
        "name": "KrZUFr1034 Ekonomia globalna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3392,
        "name": "KrZZFr3111Rr Socjologia (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3393,
        "name": "KrDZFr1021 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3394,
        "name": "KrDZFr1022 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3395,
        "name": "KrDZFr1011 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3396,
        "name": "KrDZFr1012 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3397,
        "name": "KrDZFr1013 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3398,
        "name": "KrDZFr1014 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3399,
        "name": "KrDZFr1015 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3400,
        "name": "KrDZFr1023 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3401,
        "name": "KrDZFr1024 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3402,
        "name": "KrDZFr1025 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3403,
        "name": "KrZZFr1211 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3404,
        "name": "KrZZFr1212 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3405,
        "name": "KrZZFr1213 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3406,
        "name": "KrZZFr1214 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3407,
        "name": "KrZZFr1215 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3408,
        "name": "KrZZFr1221 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3409,
        "name": "KrZZFr1222 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3410,
        "name": "KrZZFr1223 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3411,
        "name": "KrZZFr1224 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3412,
        "name": "KrZZFr1225 Geografia ekonomiczna (do wyboru)",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3413, "name": "KrDUZa207sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3414,
        "name": "KrZUZa306sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3415, "name": "KrZUZa402sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3416,
        "name": "SJO-DUMWN007B2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3417, "name": "SJO-SmCh300A1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3418,
        "name": "SJO-SZTrA015B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3419, "name": "SJO-ZUFrA011B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3420,
        "name": "SJO-ZUFrA012B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3421, "name": "SJO-ZUFrA020B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3422,
        "name": "SJO-ZUFrN019B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3423, "name": "SJO-ZURcN010A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3424,
        "name": "SJO-ZUZaA005B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3425, "name": "SJO-ZUZaA006B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3426,
        "name": "SJO-ZUZaH010A1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3427, "name": "KrZUFr306sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3428,
        "name": "KrDZTo3012Mb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3429, "name": "KrDUTr1013", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3430,
        "name": "KrZZZa301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3431, "name": "SJO-SZEkA002B2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3432,
        "name": "SJO-ZUFrN099A2",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3433, "name": "SJO-ZUZaA007B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3434,
        "name": "KrZZEk303sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3435, "name": "KrDUEk201sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3436,
        "name": "KrDUEk202sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3437, "name": "KrDUEk203sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3438,
        "name": "KrDUEk204sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3439, "name": "KrDUEk205sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3440,
        "name": "KrDUEk206sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3441, "name": "KrDUEk207sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3442,
        "name": "KrDUEk208sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3443, "name": "KrDUEk209sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3444,
        "name": "KrDUEk210sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3445, "name": "KrDUEk211sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3446,
        "name": "KrDUEk212sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3447, "name": "KrDUEk213sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3448,
        "name": "KrDUEk214sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3449, "name": "KrDUEk215sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3450,
        "name": "KrDUEk216sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3451, "name": "KrDUEk217sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3452,
        "name": "KrDUEk218sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3453, "name": "KrDUEk219sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3454,
        "name": "KrDUGa205sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3455, "name": "KrDUGa206sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3456,
        "name": "KrDUGa208sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3457, "name": "KrDUGa209sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3458,
        "name": "KrDUMg201sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3459, "name": "KrDUMg202sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3460,
        "name": "KrDUMg203sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3461, "name": "KrDUMg204sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3462,
        "name": "KrDUMg205sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3463, "name": "KrDUMg206sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3464,
        "name": "KrDUMg207sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3465, "name": "KrDUMg208sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3466,
        "name": "KrDUMg209sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3467, "name": "KrDUMg210sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3468,
        "name": "KrDUMg211sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3469, "name": "KrDUMg212sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3470,
        "name": "KrDUMg213sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3471, "name": "KrDUMg214sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3472,
        "name": "KrDUMg215sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3473, "name": "KrDUMg216sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3474,
        "name": "KrDUMg217sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3475, "name": "KrZUEk301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3476,
        "name": "KrZUEk302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3477, "name": "KrZUEk303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3478,
        "name": "KrZUEk304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3479, "name": "KrZUEk305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3480,
        "name": "KrZUEk306sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3481, "name": "KrZUEk307sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3482,
        "name": "KrZUEk308sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3483, "name": "KrZUEk309sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3484,
        "name": "KrZUEk310sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3485, "name": "KrZUEk311sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3486,
        "name": "KrZUEk312sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3487, "name": "KrZUEk313sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3488,
        "name": "KrZUGa302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3489, "name": "KrZUGa303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3490,
        "name": "KrZUGa304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3491, "name": "KrZUGa305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3492,
        "name": "KrZUGa306sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3493, "name": "KrZUGa307sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3494,
        "name": "KrZUIs302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3495, "name": "KrZUMg301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3496,
        "name": "KrZUMg302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3497, "name": "KrZUMg303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3498,
        "name": "KrZUMg304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3499, "name": "KrZUMg305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3500,
        "name": "KrZZIs307sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3501, "name": "SJO-DUMWN005B1", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3502,
        "name": "SJO-ZUFrA014B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3503, "name": "SJO-ZUFrN088A2", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3504,
        "name": "KrDZEp303sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3505, "name": "KrDZZI302sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3506,
        "name": "SJO-SZFrA035B1",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3507, "name": "KrDZTo408sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3508,
        "name": "KrDUTo107sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3509, "name": "KrZUFr343sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3510,
        "name": "KrDURc217sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3511, "name": "KrDUFr204sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3512,
        "name": "KrZUFr305sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3513, "name": "KrDUGp205sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3514,
        "name": "KrDZGi402sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3515, "name": "KrZUFr307sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3516,
        "name": "KrZZSm301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3517, "name": "KrDZMg304sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3518,
        "name": "KrDZTo2015a",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3519, "name": "KrDZTo2015b", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3520,
        "name": "KrZZGi304sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3521, "name": "KrDUTo105sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3522,
        "name": "KrZZFr322sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3523, "name": "KrDZEp301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3524,
        "name": "DeDZEk302sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3525, "name": "KrZUZa305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3526,
        "name": "KrZUTr303sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3527, "name": "KrZUFr323sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3528,
        "name": "KrZZZI2012a",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3529, "name": "KrZZFr302sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3530,
        "name": "KrZURc313sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3531, "name": "KrDUZa211sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3532,
        "name": "KrZUZa309sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3533, "name": "KrZUFr315sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3534,
        "name": "KrDZIa3011 Data Mining. Concepts, Models and Methods, Data Mining. Concepts, Models and Methods",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {
        "id": 3535,
        "name": "KrDZIa3012 Data Mining. Concepts, Models and Methods, Data Mining. Concepts, Models and Methods",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3536, "name": "KrZZFr1216", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3537,
        "name": "KrDUTo1012Mb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3538, "name": "KrDZTo3011Ha", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3539,
        "name": "KrDZTo3011Hb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3540, "name": "KrDZTo4011Ea", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3541,
        "name": "KrDZTo4011Eb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3542, "name": "KrDZTo4012Ma", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3543,
        "name": "KrDZTo4012Mb",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3544, "name": "KrDZFr303sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3545,
        "name": "KrDUFr206sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3546, "name": "KrDUFr225sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3547,
        "name": "KrZUFr341sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3548, "name": "KrZUFr406sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3549,
        "name": "KrZZGi322sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3550, "name": "KrZZEk301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3551,
        "name": "KrZZTr3012Tm",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3552, "name": "KrZUZa3001Zf", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3553,
        "name": "KrZUZa3001Zp",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3554, "name": "KrDZEk301sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3555,
        "name": "KrZUFr333sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3556, "name": "KrDUFr1016", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3557,
        "name": "KrDUFr1026",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3558, "name": "KrDURc211sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3559,
        "name": "KrDZAg301sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3560, "name": "KrZURc305sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3561,
        "name": "KrZUFr311sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3562, "name": "KrDZIs2015", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3563,
        "name": "KrDZIs2016",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }, {"id": 3564, "name": "KrZUZa310sem", "type": 1, "type_name": "Grupa dziekańska"}, {
        "id": 3565,
        "name": "KrDZMg306sem",
        "type": 1,
        "type_name": "Grupa dziekańska"
      }
      ]
    );

    scope = $rootScope.$new();
    HomepageCtrl = $controller('HomepageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of avaible groups to the scope', function () {
    $httpBackend.flush();
    expect(scope.groups.length).toBe(3565);
  });

  it('should attach empty query object to the scope', function () {
    $httpBackend.flush();
    expect(scope.query.name).toBe('');
  });
});
