const schools = `[
    {
      "institution": "Alabama A & M University"
    },
    {
      "institution": "University of Alabama at Birmingham"
    },
    {
      "institution": "Amridge University"
    },
    {
      "institution": "University of Alabama in Huntsville"
    },
    {
      "institution": "Alabama State University"
    },
    {
      "institution": "University of Alabama System Office"
    },
    {
      "institution": "The University of Alabama"
    },
    {
      "institution": "Central Alabama Community College"
    },
    {
      "institution": "Athens State University"
    },
    {
      "institution": "Auburn University at Montgomery"
    },
    {
      "institution": "Auburn University"
    },
    {
      "institution": "Birmingham Southern College"
    },
    {
      "institution": "Chattahoochee Valley Community College"
    },
    {
      "institution": "Concordia College Alabama"
    },
    {
      "institution": "South University-Montgomery"
    },
    {
      "institution": "Enterprise State Community College"
    },
    {
      "institution": "James H Faulkner State Community College"
    },
    {
      "institution": "Faulkner University"
    },
    {
      "institution": "Gadsden State Community College"
    },
    {
      "institution": "New Beginning College of Cosmetology"
    },
    {
      "institution": "George C Wallace State Community College-Dothan"
    },
    {
      "institution": "George C Wallace State Community College-Hanceville"
    },
    {
      "institution": "George C Wallace State Community College-Selma"
    },
    {
      "institution": "Herzing University-Birmingham"
    },
    {
      "institution": "Huntingdon College"
    },
    {
      "institution": "Heritage Christian University"
    },
    {
      "institution": "J F Drake State Community and Technical College"
    },
    {
      "institution": "J F Ingram State Technical College"
    },
    {
      "institution": "Jacksonville State University"
    },
    {
      "institution": "Jefferson Davis Community College"
    },
    {
      "institution": "Jefferson State Community College"
    },
    {
      "institution": "John C Calhoun State Community College"
    },
    {
      "institution": "Judson College"
    },
    {
      "institution": "Lawson State Community College-Birmingham Campus"
    },
    {
      "institution": "University of West Alabama"
    },
    {
      "institution": "Lurleen B Wallace Community College"
    },
    {
      "institution": "Marion Military Institute"
    },
    {
      "institution": "Miles College"
    },
    {
      "institution": "University of Mobile"
    },
    {
      "institution": "University of Montevallo"
    },
    {
      "institution": "Northwest-Shoals Community College"
    },
    {
      "institution": "University of North Alabama"
    },
    {
      "institution": "Northeast Alabama Community College"
    },
    {
      "institution": "Oakwood University"
    },
    {
      "institution": "Alabama Southern Community College"
    },
    {
      "institution": "Prince Institute-Southeast"
    },
    {
      "institution": "Reid State Technical College"
    },
    {
      "institution": "Bishop State Community College"
    },
    {
      "institution": "Samford University"
    },
    {
      "institution": "Selma University"
    },
    {
      "institution": "Shelton State Community College"
    },
    {
      "institution": "Snead State Community College"
    },
    {
      "institution": "University of South Alabama"
    },
    {
      "institution": "Spring Hill College"
    },
    {
      "institution": "Southeastern Bible College"
    },
    {
      "institution": "Stillman College"
    },
    {
      "institution": "Talladega College"
    },
    {
      "institution": "H Councill Trenholm State Technical College"
    },
    {
      "institution": "Troy University"
    },
    {
      "institution": "Tuskegee University"
    },
    {
      "institution": "United States Sports Academy"
    },
    {
      "institution": "Bevill State Community College"
    },
    {
      "institution": "University of Alaska Anchorage"
    },
    {
      "institution": "Alaska Bible College"
    },
    {
      "institution": "University of Alaska Fairbanks"
    },
    {
      "institution": "University of Alaska Southeast"
    },
    {
      "institution": "Alaska Pacific University"
    },
    {
      "institution": "AVTEC-Alaska's Institute of Technology"
    },
    {
      "institution": "Charter College-Anchorage"
    },
    {
      "institution": "Prince William Sound Community College"
    },
    {
      "institution": "Alaska Career College"
    },
    {
      "institution": "University of Alaska System of Higher Education"
    },
    {
      "institution": "Everest College-Phoenix"
    },
    {
      "institution": "Collins College"
    },
    {
      "institution": "Empire Beauty School-Paradise Valley"
    },
    {
      "institution": "Empire Beauty School-Tucson"
    },
    {
      "institution": "Thunderbird School of Global Management"
    },
    {
      "institution": "American Indian College of the Assemblies of God Inc"
    },
    {
      "institution": "American Institute of Technology"
    },
    {
      "institution": "Carrington College-Phoenix"
    },
    {
      "institution": "Carrington College-Mesa"
    },
    {
      "institution": "Carrington College-Tucson"
    },
    {
      "institution": "College America-Flagstaff"
    },
    {
      "institution": "Arizona Academy of Beauty-East"
    },
    {
      "institution": "Arizona Automotive Institute"
    },
    {
      "institution": "Brookline College-Phoenix"
    },
    {
      "institution": "Arizona State University-Tempe"
    },
    {
      "institution": "Arizona Western College"
    },
    {
      "institution": "University of Arizona"
    },
    {
      "institution": "Southwest University of Visual Arts-Tucson"
    },
    {
      "institution": "Brillare Hairdressing Academy"
    },
    {
      "institution": "Central Arizona College"
    },
    {
      "institution": "Brown Mackie College-Tucson"
    },
    {
      "institution": "Charles of Italy Beauty College"
    },
    {
      "institution": "Cochise College"
    },
    {
      "institution": "Empire Beauty School-Flagstaff"
    },
    {
      "institution": "Empire Beauty School-Chandler"
    },
    {
      "institution": "Cortiva Institute-Tucson"
    },
    {
      "institution": "DeVry University-Arizona"
    },
    {
      "institution": "Avalon School of Cosmetology-Mesa"
    },
    {
      "institution": "Eastern Arizona College"
    },
    {
      "institution": "Embry-Riddle Aeronautical University-Prescott"
    },
    {
      "institution": "Frank Lloyd Wright School of Architecture"
    },
    {
      "institution": "Glendale Community College"
    },
    {
      "institution": "Grand Canyon University"
    },
    {
      "institution": "Anthem College-Phoenix"
    },
    {
      "institution": "International Academy of Hair Design"
    },
    {
      "institution": "Kaplan College-Phoenix"
    },
    {
      "institution": "Maricopa Community College System Office"
    },
    {
      "institution": "GateWay Community College"
    },
    {
      "institution": "Mesa Community College"
    },
    {
      "institution": "ITT Technical Institute-Tucson"
    },
    {
      "institution": "ITT Technical Institute-Tempe"
    },
    {
      "institution": "Mohave Community College"
    },
    {
      "institution": "Universal Technical Institute of Arizona Inc-Motorcycle Mechanics Institute Division"
    },
    {
      "institution": "Dine College"
    },
    {
      "institution": "Northern Arizona University"
    },
    {
      "institution": "Northland Pioneer College"
    },
    {
      "institution": "Ottawa University-Phoenix"
    },
    {
      "institution": "Phoenix College"
    },
    {
      "institution": "Cortiva Institute-Scottsdale"
    },
    {
      "institution": "University of Phoenix-Phoenix Campus"
    },
    {
      "institution": "Pima Community College"
    },
    {
      "institution": "Pima Medical Institute-Tucson"
    },
    {
      "institution": "Pima Medical Institute-Albuquerque"
    },
    {
      "institution": "Prescott College"
    },
    {
      "institution": "Refrigeration School Inc"
    },
    {
      "institution": "Rio Salado College"
    },
    {
      "institution": "Roberto-Venn School of Luthiery"
    },
    {
      "institution": "Hair Academy of Safford"
    },
    {
      "institution": "Scottsdale Community College"
    },
    {
      "institution": "South Mountain Community College"
    },
    {
      "institution": "Arizona Christian University"
    },
    {
      "institution": "Tucson College"
    },
    {
      "institution": "Universal Technical Institute of Arizona Inc"
    },
    {
      "institution": "Western International University"
    },
    {
      "institution": "Empire Beauty School-NW Phoenix"
    },
    {
      "institution": "Yavapai College"
    },
    {
      "institution": "University of Arkansas at Little Rock"
    },
    {
      "institution": "University of Arkansas for Medical Sciences"
    },
    {
      "institution": "ABC Beauty College Inc"
    },
    {
      "institution": "Arkansas Baptist College"
    },
    {
      "institution": "Arkansas Beauty School"
    },
    {
      "institution": "Arkansas Beauty College"
    },
    {
      "institution": "Lyon College"
    },
    {
      "institution": "Arkansas College of Barbering and Hair Design"
    },
    {
      "institution": "Arthur's Beauty College Inc-Fort Smith"
    },
    {
      "institution": "University of Arkansas"
    },
    {
      "institution": "University of Arkansas at Pine Bluff"
    },
    {
      "institution": "Arkansas State University-Beebe"
    },
    {
      "institution": "Arkansas State University-Main Campus"
    },
    {
      "institution": "Arkansas Tech University"
    },
    {
      "institution": "University of Arkansas at Monticello"
    },
    {
      "institution": "Arthur's Beauty College Inc-Jacksonville"
    },
    {
      "institution": "Baptist Health Schools-Little Rock"
    },
    {
      "institution": "Black River Technical College"
    },
    {
      "institution": "University of Central Arkansas"
    },
    {
      "institution": "Central Baptist College"
    },
    {
      "institution": "Cossatot Community College of the University of Arkansas"
    },
    {
      "institution": "Crowley's Ridge College"
    },
    {
      "institution": "Crowley's Ridge Technical Institute"
    },
    {
      "institution": "East Arkansas Community College"
    },
    {
      "institution": "Eastern College of Health Vocations-Little Rock"
    },
    {
      "institution": "Imagine-Paul Mitchell Partner School"
    },
    {
      "institution": "National Park Community College"
    },
    {
      "institution": "University of Arkansas Community College-Batesville"
    },
    {
      "institution": "Harding University"
    },
    {
      "institution": "Henderson State University"
    },
    {
      "institution": "Hendrix College"
    },
    {
      "institution": "Hot Springs Beauty College"
    },
    {
      "institution": "Jefferson Regional Medical Center School of Nursing"
    },
    {
      "institution": "John Brown University"
    },
    {
      "institution": "Lees School of Cosmetology"
    },
    {
      "institution": "Career Academy of Hair Design"
    },
    {
      "institution": "Marsha Kay Beauty College"
    },
    {
      "institution": "Academy of Salon and Spa"
    },
    {
      "institution": "Mid-South Community College"
    },
    {
      "institution": "Arkansas Northeastern College"
    },
    {
      "institution": "Margaret's Hair Academy Inc"
    },
    {
      "institution": "New Tyler Barber College Inc"
    },
    {
      "institution": "North Arkansas College"
    },
    {
      "institution": "Northwest Technical Institute"
    },
    {
      "institution": "Ouachita Baptist University"
    },
    {
      "institution": "College of the Ouachitas"
    },
    {
      "institution": "Ozarka College"
    },
    {
      "institution": "University of the Ozarks"
    },
    {
      "institution": "University of Arkansas Community College-Morrilton"
    },
    {
      "institution": "Philander Smith College"
    },
    {
      "institution": "Phillips Community College of the University of Arkansas"
    },
    {
      "institution": "Southeast Arkansas College"
    },
    {
      "institution": "Professional Cosmetology Education Center"
    },
    {
      "institution": "Pulaski Technical College"
    },
    {
      "institution": "University of Arkansas Community College-Hope"
    },
    {
      "institution": "Rich Mountain Community College"
    },
    {
      "institution": "Paul Mitchell the School-Arkansas"
    },
    {
      "institution": "Searcy Beauty College Inc"
    },
    {
      "institution": "Shorter College"
    },
    {
      "institution": "Williams Baptist College"
    },
    {
      "institution": "South Arkansas Community College"
    },
    {
      "institution": "Southern Arkansas University Main Campus"
    },
    {
      "institution": "Southern Arkansas University Tech"
    },
    {
      "institution": "University of Arkansas System Office"
    },
    {
      "institution": "Velvatex College of Beauty Culture"
    },
    {
      "institution": "University of Arkansas-Fort Smith"
    },
    {
      "institution": "Academy of Art University"
    },
    {
      "institution": "ITT Technical Institute-Rancho Cordova"
    },
    {
      "institution": "Academy of Chinese Culture and Health Sciences"
    },
    {
      "institution": "The Academy of Radio and TV Broadcasting"
    },
    {
      "institution": "Avalon School of Cosmetology-Alameda"
    },
    {
      "institution": "College of Alameda"
    },
    {
      "institution": "Allan Hancock College"
    },
    {
      "institution": "American Academy of Dramatic Arts-Los Angeles"
    },
    {
      "institution": "American Baptist Seminary of the West"
    },
    {
      "institution": "American Film Institute Conservatory"
    },
    {
      "institution": "American Beauty College"
    },
    {
      "institution": "American Career College-Los Angeles"
    },
    {
      "institution": "American Conservatory Theater"
    },
    {
      "institution": "American River College"
    },
    {
      "institution": "Everest College-Hayward"
    },
    {
      "institution": "Antelope Valley College"
    },
    {
      "institution": "Art Center College of Design"
    },
    {
      "institution": "Associated Technical College-Los Angeles"
    },
    {
      "institution": "Associated Technical College-San Diego"
    },
    {
      "institution": "Azusa Pacific University"
    },
    {
      "institution": "Bakersfield College"
    },
    {
      "institution": "Barstow Community College"
    },
    {
      "institution": "Bellus Academy-National City"
    },
    {
      "institution": "Bethesda University of California"
    },
    {
      "institution": "Biola University"
    },
    {
      "institution": "Brooks Institute"
    },
    {
      "institution": "Brownson Technical School"
    },
    {
      "institution": "Bryan University"
    },
    {
      "institution": "Butte College"
    },
    {
      "institution": "Phillips Graduate Institute"
    },
    {
      "institution": "California Institute of Integral Studies"
    },
    {
      "institution": "Cabrillo College"
    },
    {
      "institution": "California Baptist University"
    },
    {
      "institution": "California College of the Arts"
    },
    {
      "institution": "University of California-Hastings College of Law"
    },
    {
      "institution": "California Institute of Technology"
    },
    {
      "institution": "California Lutheran University"
    },
    {
      "institution": "California Polytechnic State University-San Luis Obispo"
    },
    {
      "institution": "Alliant International University"
    },
    {
      "institution": "California State University-Bakersfield"
    },
    {
      "institution": "California State University-Stanislaus"
    },
    {
      "institution": "California State University-Chancellors Office"
    },
    {
      "institution": "California State University-San Bernardino"
    },
    {
      "institution": "California State Polytechnic University-Pomona"
    },
    {
      "institution": "California State University-Chico"
    },
    {
      "institution": "California State University-Dominguez Hills"
    },
    {
      "institution": "California State University-Fresno"
    },
    {
      "institution": "California State University-Fullerton"
    },
    {
      "institution": "California State University-East Bay"
    },
    {
      "institution": "California State University-Long Beach"
    },
    {
      "institution": "California State University-Los Angeles"
    },
    {
      "institution": "California State University-Northridge"
    },
    {
      "institution": "California State University-Sacramento"
    },
    {
      "institution": "University of California-Berkeley"
    },
    {
      "institution": "University of California-Davis"
    },
    {
      "institution": "University of California-Irvine"
    },
    {
      "institution": "University of California-Los Angeles"
    },
    {
      "institution": "University of California-Riverside"
    },
    {
      "institution": "University of California-San Diego"
    },
    {
      "institution": "University of California-San Francisco"
    },
    {
      "institution": "University of California-Santa Barbara"
    },
    {
      "institution": "University of California-Santa Cruz"
    },
    {
      "institution": "Sofia University"
    },
    {
      "institution": "California Beauty School"
    },
    {
      "institution": "California Christian College"
    },
    {
      "institution": "California College San Diego"
    },
    {
      "institution": "Le Cordon Bleu College of Culinary Arts-San Francisco"
    },
    {
      "institution": "California Hair Design Academy"
    },
    {
      "institution": "California Institute of the Arts"
    },
    {
      "institution": "California Maritime Academy"
    },
    {
      "institution": "California Western School of Law"
    },
    {
      "institution": "Canada College"
    },
    {
      "institution": "College of the Canyons"
    },
    {
      "institution": "Career Academy of Beauty"
    },
    {
      "institution": "Casa Loma College-Van Nuys"
    },
    {
      "institution": "CET-San Diego"
    },
    {
      "institution": "CET-Sobrato"
    },
    {
      "institution": "CET-El Centro"
    },
    {
      "institution": "CET-San Bernardino"
    },
    {
      "institution": "CET-Watsonville"
    },
    {
      "institution": "CET-Gilroy"
    },
    {
      "institution": "CET-Salinas"
    },
    {
      "institution": "Cerritos College"
    },
    {
      "institution": "Cerro Coso Community College"
    },
    {
      "institution": "Chabot College"
    },
    {
      "institution": "Chaffey College"
    },
    {
      "institution": "Chapman University"
    },
    {
      "institution": "Charles R Drew University of Medicine and Science"
    },
    {
      "institution": "Concordia University-Irvine"
    },
    {
      "institution": "San Diego Christian College"
    },
    {
      "institution": "Church Divinity School of the Pacific"
    },
    {
      "institution": "Citrus College"
    },
    {
      "institution": "Citrus Heights Beauty College"
    },
    {
      "institution": "City College of San Francisco"
    },
    {
      "institution": "Claremont Graduate University"
    },
    {
      "institution": "Claremont McKenna College"
    },
    {
      "institution": "Milan Institute-Visalia"
    },
    {
      "institution": "Clovis Adult Education"
    },
    {
      "institution": "Coast Community College District Office"
    },
    {
      "institution": "Coastline Community College"
    },
    {
      "institution": "Cogswell College"
    },
    {
      "institution": "Coleman University"
    },
    {
      "institution": "COBA Academy"
    },
    {
      "institution": "Western University of Health Sciences"
    },
    {
      "institution": "Columbia College"
    },
    {
      "institution": "Columbia College-Hollywood"
    },
    {
      "institution": "El Camino College-Compton Center"
    },
    {
      "institution": "Western Beauty Institute"
    },
    {
      "institution": "Contra Costa Community College District Office"
    },
    {
      "institution": "Contra Costa College"
    },
    {
      "institution": "Cosumnes River College"
    },
    {
      "institution": "Crafton Hills College"
    },
    {
      "institution": "Cuesta College"
    },
    {
      "institution": "Cuyamaca College"
    },
    {
      "institution": "Cypress College"
    },
    {
      "institution": "De Anza College"
    },
    {
      "institution": "Marinello Schools of Beauty-Hemet"
    },
    {
      "institution": "International School of Beauty Inc"
    },
    {
      "institution": "Dell'Arte International School of Physical Theatre"
    },
    {
      "institution": "College of the Desert"
    },
    {
      "institution": "Design Institute of San Diego"
    },
    {
      "institution": "DeVry University-California"
    },
    {
      "institution": "Diablo Valley College"
    },
    {
      "institution": "Dominican University of California"
    },
    {
      "institution": "Dominican School of Philosophy & Theology"
    },
    {
      "institution": "East Los Angeles College"
    },
    {
      "institution": "Marinello Schools of Beauty-Santa Clara"
    },
    {
      "institution": "San Diego Continuing Education"
    },
    {
      "institution": "El Camino Community College District"
    },
    {
      "institution": "Elegance International"
    },
    {
      "institution": "Marinello Schools of Beauty-Burbank"
    },
    {
      "institution": "Marinello Schools of Beauty-Moreno Valley"
    },
    {
      "institution": "Emperor's College of Traditional Oriental Medicine"
    },
    {
      "institution": "Empire College School of Business"
    },
    {
      "institution": "Evergreen Valley College"
    },
    {
      "institution": "Fashion Institute of Design & Merchandising-Los Angeles"
    },
    {
      "institution": "Fashion Careers College"
    },
    {
      "institution": "Fashion Institute of Design & Merchandising-San Francisco"
    },
    {
      "institution": "Fashion Institute of Design & Merchandising-Orange County"
    },
    {
      "institution": "Feather River Community College District"
    },
    {
      "institution": "Federico Beauty Institute"
    },
    {
      "institution": "Fielding Graduate University"
    },
    {
      "institution": "Five Branches University"
    },
    {
      "institution": "Hair California Beauty Academy"
    },
    {
      "institution": "Foothill College"
    },
    {
      "institution": "Franciscan School of Theology"
    },
    {
      "institution": "Fredrick and Charles Beauty College"
    },
    {
      "institution": "Fresno City College"
    },
    {
      "institution": "Fresno Pacific University"
    },
    {
      "institution": "Foothill-De Anza Community College District"
    },
    {
      "institution": "Fuller Theological Seminary in California"
    },
    {
      "institution": "Fullerton College"
    },
    {
      "institution": "Galen College of Medical and Dental Assistants"
    },
    {
      "institution": "Gavilan College"
    },
    {
      "institution": "Gemological Institute of America-Carlsbad"
    },
    {
      "institution": "Glendale Community College"
    },
    {
      "institution": "Glendale Career College"
    },
    {
      "institution": "Golden Gate University-San Francisco"
    },
    {
      "institution": "Golden West College"
    },
    {
      "institution": "Graduate Theological Union"
    },
    {
      "institution": "Grossmont-Cuyamaca Community College District"
    },
    {
      "institution": "Grossmont College"
    },
    {
      "institution": "Salon Success Academy-San Bernardino"
    },
    {
      "institution": "Hartnell College"
    },
    {
      "institution": "Harvey Mudd College"
    },
    {
      "institution": "Heald College-Rancho Cordova"
    },
    {
      "institution": "Heald College-Fresno"
    },
    {
      "institution": "Heald College-San Jose"
    },
    {
      "institution": "Heald College-San Francisco"
    },
    {
      "institution": "Heald College-Concord"
    },
    {
      "institution": "Hilltop Beauty School"
    },
    {
      "institution": "Holy Names University"
    },
    {
      "institution": "Pacifica Graduate Institute"
    },
    {
      "institution": "Humboldt State University"
    },
    {
      "institution": "Humphreys College-Stockton and Modesto Campuses"
    },
    {
      "institution": "Imperial Valley College"
    },
    {
      "institution": "Institute for Business and Technology"
    },
    {
      "institution": "LA College International"
    },
    {
      "institution": "Interior Designers Institute"
    },
    {
      "institution": "Toni & Guy Hairdressing Academy-Santa Monica"
    },
    {
      "institution": "Irvine Valley College"
    },
    {
      "institution": "ITT Technical Institute-National City"
    },
    {
      "institution": "ITT Technical Institute-San Dimas"
    },
    {
      "institution": "ITT Technical Institute-Orange"
    },
    {
      "institution": "Bellus Academy-El Cajon"
    },
    {
      "institution": "Joe Blasco Makeup Artist Training Center"
    },
    {
      "institution": "John F Kennedy University"
    },
    {
      "institution": "American Jewish University"
    },
    {
      "institution": "Reedley College"
    },
    {
      "institution": "Life Pacific College"
    },
    {
      "institution": "The Art Institute of California-Argosy University San Diego"
    },
    {
      "institution": "University of La Verne"
    },
    {
      "institution": "Laguna College of Art and Design"
    },
    {
      "institution": "Lake Tahoe Community College"
    },
    {
      "institution": "Lancaster Beauty School"
    },
    {
      "institution": "Laney College"
    },
    {
      "institution": "Lassen Community College"
    },
    {
      "institution": "Life Chiropractic College West"
    },
    {
      "institution": "Lincoln University"
    },
    {
      "institution": "Southern California Seminary"
    },
    {
      "institution": "La Sierra University"
    },
    {
      "institution": "Loma Linda University"
    },
    {
      "institution": "Long Beach City College"
    },
    {
      "institution": "Southern California University of Health Sciences"
    },
    {
      "institution": "Los Angeles Community College District Office"
    },
    {
      "institution": "Los Angeles Harbor College"
    },
    {
      "institution": "Los Angeles Pierce College"
    },
    {
      "institution": "Los Angeles Southwest College"
    },
    {
      "institution": "Los Angeles Trade Technical College"
    },
    {
      "institution": "Los Angeles Valley College"
    },
    {
      "institution": "The Master's College and Seminary"
    },
    {
      "institution": "Los Angeles City College"
    },
    {
      "institution": "Los Angeles County College of Nursing and Allied Health"
    },
    {
      "institution": "Los Angeles Mission College"
    },
    {
      "institution": "Los Medanos College"
    },
    {
      "institution": "Los Rios Community College District Office"
    },
    {
      "institution": "The Art Institute of California-Argosy University San Francisco"
    },
    {
      "institution": "Loyola Marymount University"
    },
    {
      "institution": "Lu Ross Academy"
    },
    {
      "institution": "Manchester Beauty College"
    },
    {
      "institution": "Tulare Beauty College"
    },
    {
      "institution": "Lyles Bakersfield College of Beauty"
    },
    {
      "institution": "Lyles Fresno College of Beauty"
    },
    {
      "institution": "Lytles Redwood Empire Beauty College Inc"
    },
    {
      "institution": "MTI Business College Inc"
    },
    {
      "institution": "MTI College"
    },
    {
      "institution": "Kaplan College-Sacramento"
    },
    {
      "institution": "Kaplan College-San Diego"
    },
    {
      "institution": "Kaplan College-Vista"
    },
    {
      "institution": "College of Marin"
    },
    {
      "institution": "Marinello Schools of Beauty-Los Angeles"
    },
    {
      "institution": "Marymount California University"
    },
    {
      "institution": "Mendocino College"
    },
    {
      "institution": "Menlo College"
    },
    {
      "institution": "Merced College"
    },
    {
      "institution": "Merritt College"
    },
    {
      "institution": "Mills College"
    },
    {
      "institution": "MiraCosta College"
    },
    {
      "institution": "Marinello Schools of Beauty-San Francisco"
    },
    {
      "institution": "Mission College"
    },
    {
      "institution": "Modern Beauty Academy"
    },
    {
      "institution": "Kaplan College-North Hollywood"
    },
    {
      "institution": "Modesto Junior College"
    },
    {
      "institution": "Moler Barber College"
    },
    {
      "institution": "Monterey Institute of International Studies"
    },
    {
      "institution": "Monterey Peninsula College"
    },
    {
      "institution": "Moorpark College"
    },
    {
      "institution": "Mt San Antonio College"
    },
    {
      "institution": "Mount St Mary's College"
    },
    {
      "institution": "Mt San Jacinto Community College District"
    },
    {
      "institution": "Mueller College"
    },
    {
      "institution": "Musicians Institute"
    },
    {
      "institution": "Napa Valley College"
    },
    {
      "institution": "Everest College-San Francisco"
    },
    {
      "institution": "Everest College-Reseda"
    },
    {
      "institution": "Everest College-LA Wilshire"
    },
    {
      "institution": "Everest College-San Jose"
    },
    {
      "institution": "Everest College-Gardena"
    },
    {
      "institution": "Everest College-Alhambra"
    },
    {
      "institution": "Everest College-San Bernardino"
    },
    {
      "institution": "The National Hispanic University"
    },
    {
      "institution": "National Holistic Institute"
    },
    {
      "institution": "National University"
    },
    {
      "institution": "Naval Postgraduate School"
    },
    {
      "institution": "Newschool of Architecture and Design"
    },
    {
      "institution": "Newberry School of Beauty"
    },
    {
      "institution": "Adrian's College of Beauty Modesto"
    },
    {
      "institution": "North Orange County Community College District"
    },
    {
      "institution": "North-West College-Pomona"
    },
    {
      "institution": "North-West College-West Covina"
    },
    {
      "institution": "North-West College-Pasadena"
    },
    {
      "institution": "Northwestern Polytechnic University"
    },
    {
      "institution": "Notre Dame de Namur University"
    },
    {
      "institution": "Occidental College"
    },
    {
      "institution": "Oceanside College of Beauty"
    },
    {
      "institution": "Ohlone College"
    },
    {
      "institution": "Orange Coast College"
    },
    {
      "institution": "Otis College of Art and Design"
    },
    {
      "institution": "Oxnard College"
    },
    {
      "institution": "Hope International University"
    },
    {
      "institution": "Concorde Career College-San Diego"
    },
    {
      "institution": "Palo Alto University"
    },
    {
      "institution": "Pacific Lutheran Theological Seminary"
    },
    {
      "institution": "Pacific Oaks College"
    },
    {
      "institution": "Pacific School of Religion"
    },
    {
      "institution": "Pacific States University"
    },
    {
      "institution": "Pacific Union College"
    },
    {
      "institution": "University of the Pacific"
    },
    {
      "institution": "Palo Verde College"
    },
    {
      "institution": "Palomar College"
    },
    {
      "institution": "Paris Beauty College"
    },
    {
      "institution": "Pasadena City College"
    },
    {
      "institution": "Pepperdine University"
    },
    {
      "institution": "Peralta Community College System Office"
    },
    {
      "institution": "Pitzer College"
    },
    {
      "institution": "Platt College-San Diego"
    },
    {
      "institution": "Point Loma Nazarene University"
    },
    {
      "institution": "Pomona College"
    },
    {
      "institution": "Porterville College"
    },
    {
      "institution": "Westwood College-South Bay"
    },
    {
      "institution": "Professional Institute of Beauty"
    },
    {
      "institution": "Santa Ana College"
    },
    {
      "institution": "Pardee RAND Graduate School"
    },
    {
      "institution": "Shasta School of Cosmetology"
    },
    {
      "institution": "University of Redlands"
    },
    {
      "institution": "College of the Redwoods"
    },
    {
      "institution": "Salon Success Academy-Upland"
    },
    {
      "institution": "Salon Success Academy-Corona"
    },
    {
      "institution": "Rio Hondo College"
    },
    {
      "institution": "Riverside City College"
    },
    {
      "institution": "Argosy University-San Francisco Bay Area"
    },
    {
      "institution": "Rosemead Beauty School"
    },
    {
      "institution": "Dongguk University-Los Angeles"
    },
    {
      "institution": "Sacramento City College"
    },
    {
      "institution": "Saddleback College"
    },
    {
      "institution": "Saint Patrick's Seminary and University"
    },
    {
      "institution": "Samuel Merritt University"
    },
    {
      "institution": "San Diego Community College District-District Office"
    },
    {
      "institution": "San Diego City College"
    },
    {
      "institution": "Golf Academy of America-Carlsbad"
    },
    {
      "institution": "San Diego Mesa College"
    },
    {
      "institution": "San Diego Miramar College"
    },
    {
      "institution": "San Diego State University"
    },
    {
      "institution": "University of San Diego"
    },
    {
      "institution": "San Francisco Art Institute"
    },
    {
      "institution": "San Francisco Conservatory of Music"
    },
    {
      "institution": "San Francisco State University"
    },
    {
      "institution": "San Francisco Theological Seminary"
    },
    {
      "institution": "University of San Francisco"
    },
    {
      "institution": "San Joaquin College of Law"
    },
    {
      "institution": "San Joaquin Delta College"
    },
    {
      "institution": "San Joaquin Valley College-Visalia"
    },
    {
      "institution": "San Joaquin Valley College-Bakersfield"
    },
    {
      "institution": "William Jessup University"
    },
    {
      "institution": "San Jose-Evergreen Community College District"
    },
    {
      "institution": "San Jose City College"
    },
    {
      "institution": "San Jose State University"
    },
    {
      "institution": "San Mateo County Community College District Office"
    },
    {
      "institution": "College of San Mateo"
    },
    {
      "institution": "Santa Barbara Business College-Bakersfield"
    },
    {
      "institution": "Westwood College-Los Angeles"
    },
    {
      "institution": "Santa Barbara Business College-Santa Maria"
    },
    {
      "institution": "Santa Barbara City College"
    },
    {
      "institution": "Santa Clara University"
    },
    {
      "institution": "Santa Monica College"
    },
    {
      "institution": "Santa Rosa Junior College"
    },
    {
      "institution": "Saybrook University"
    },
    {
      "institution": "Scripps College"
    },
    {
      "institution": "Wyotech-Fremont"
    },
    {
      "institution": "College of the Sequoias"
    },
    {
      "institution": "Shasta Bible College and Graduate School"
    },
    {
      "institution": "Shasta College"
    },
    {
      "institution": "Sierra College"
    },
    {
      "institution": "Sierra College of Beauty"
    },
    {
      "institution": "Sierra Valley College of Court Reporting"
    },
    {
      "institution": "Trinity Law School"
    },
    {
      "institution": "Simpson University"
    },
    {
      "institution": "College of the Siskiyous"
    },
    {
      "institution": "Charles A Jones Career and Education Center"
    },
    {
      "institution": "Skyline College"
    },
    {
      "institution": "San Bernardino Valley College"
    },
    {
      "institution": "Saint Mary's College of California"
    },
    {
      "institution": "Solano Community College"
    },
    {
      "institution": "Sonoma State University"
    },
    {
      "institution": "Pinnacle College"
    },
    {
      "institution": "South Baylo University"
    },
    {
      "institution": "South Coast College"
    },
    {
      "institution": "Vanguard University of Southern California"
    },
    {
      "institution": "Concorde Career College-Garden Grove"
    },
    {
      "institution": "Southwestern College"
    },
    {
      "institution": "St John's Seminary"
    },
    {
      "institution": "Starr King School for Ministry"
    },
    {
      "institution": "State Center Community College District"
    },
    {
      "institution": "Marshall B Ketchum University"
    },
    {
      "institution": "Southern California Institute of Architecture"
    },
    {
      "institution": "University of Southern California"
    },
    {
      "institution": "Southwestern Law School"
    },
    {
      "institution": "Taft College"
    },
    {
      "institution": "Claremont School of Theology"
    },
    {
      "institution": "Thomas Aquinas College"
    },
    {
      "institution": "Marinello Schools of Beauty-Lake Forest"
    },
    {
      "institution": "Epic Bible College"
    },
    {
      "institution": "University of California-System Administration Central Office"
    },
    {
      "institution": "United Education Institute-Huntington Park Campus"
    },
    {
      "institution": "Concorde Career College-San Bernardino"
    },
    {
      "institution": "Universal College of Beauty Inc-Los Angeles 1"
    },
    {
      "institution": "Concorde Career College-North Hollywood"
    },
    {
      "institution": "Ventura County Community College System Office"
    },
    {
      "institution": "Ventura College"
    },
    {
      "institution": "The Santa Barbara and Ventura Colleges of Law-Ventura"
    },
    {
      "institution": "Victor Valley Beauty College Inc"
    },
    {
      "institution": "Victor Valley College"
    },
    {
      "institution": "Berkeley City College"
    },
    {
      "institution": "West Valley Mission Community College District Office"
    },
    {
      "institution": "Walden University"
    },
    {
      "institution": "Waynes College of Beauty"
    },
    {
      "institution": "West Hills College-Coalinga"
    },
    {
      "institution": "West Los Angeles College"
    },
    {
      "institution": "West Valley College"
    },
    {
      "institution": "Carrington College California-Sacramento"
    },
    {
      "institution": "Westminster Theological Seminary in California"
    },
    {
      "institution": "Westmont College"
    },
    {
      "institution": "Whittier College"
    },
    {
      "institution": "Woodbury University"
    },
    {
      "institution": "The Wright Institute"
    },
    {
      "institution": "Western State College of Law at Argosy University"
    },
    {
      "institution": "Thomas Jefferson School of Law"
    },
    {
      "institution": "Yeshiva Ohr Elchonon Chabad West Coast Talmudical Seminary"
    },
    {
      "institution": "Yosemite Community College District Office"
    },
    {
      "institution": "Yuba College"
    },
    {
      "institution": "The Salon Professional Academy-Grand Junction"
    },
    {
      "institution": "Adams State University"
    },
    {
      "institution": "Aims Community College"
    },
    {
      "institution": "Arapahoe Community College"
    },
    {
      "institution": "Bel-Rea Institute of Animal Technology"
    },
    {
      "institution": "Everest College-Colorado Springs"
    },
    {
      "institution": "Boulder College of Massage Therapy"
    },
    {
      "institution": "University of Colorado Denver"
    },
    {
      "institution": "University of Colorado Colorado Springs"
    },
    {
      "institution": "Redstone College"
    },
    {
      "institution": "University of Colorado Boulder"
    },
    {
      "institution": "Colorado Christian University"
    },
    {
      "institution": "Colorado College"
    },
    {
      "institution": "Concorde Career College-Aurora"
    },
    {
      "institution": "The Art Institute of Colorado"
    },
    {
      "institution": "Colorado Mountain College"
    },
    {
      "institution": "Colorado Northwestern Community College"
    },
    {
      "institution": "Colorado School of Mines"
    },
    {
      "institution": "Colorado School of Trades"
    },
    {
      "institution": "Colorado State University-Fort Collins"
    },
    {
      "institution": "Colorado Technical University-Colorado Springs"
    },
    {
      "institution": "Empire Beauty School-Lakewood"
    },
    {
      "institution": "Community College of Aurora"
    },
    {
      "institution": "College America-Denver"
    },
    {
      "institution": "Delta Montrose Technical College"
    },
    {
      "institution": "Prince Institute-Rocky Mountains"
    },
    {
      "institution": "Community College of Denver"
    },
    {
      "institution": "Lincoln College of Technology-Denver"
    },
    {
      "institution": "Denver Seminary"
    },
    {
      "institution": "Westwood College-Denver North"
    },
    {
      "institution": "University of Denver"
    },
    {
      "institution": "Emily Griffith Technical College"
    },
    {
      "institution": "Fort Lewis College"
    },
    {
      "institution": "Front Range Community College"
    },
    {
      "institution": "Glenwood Beauty Academy"
    },
    {
      "institution": "Hair Dynamics Education Center"
    },
    {
      "institution": "Iliff School of Theology"
    },
    {
      "institution": "International Salon and Spa Academy"
    },
    {
      "institution": "Lamar Community College"
    },
    {
      "institution": "Colorado Mesa University"
    },
    {
      "institution": "Metropolitan State University of Denver"
    },
    {
      "institution": "Morgan Community College"
    },
    {
      "institution": "Naropa University"
    },
    {
      "institution": "National American University-Colorado Springs"
    },
    {
      "institution": "National American University-Denver"
    },
    {
      "institution": "Nazarene Bible College"
    },
    {
      "institution": "Northeastern Junior College"
    },
    {
      "institution": "University of Northern Colorado"
    },
    {
      "institution": "Otero Junior College"
    },
    {
      "institution": "Everest College-Thornton"
    },
    {
      "institution": "Pikes Peak Community College"
    },
    {
      "institution": "Intellitec Medical Institute"
    },
    {
      "institution": "Pueblo Community College"
    },
    {
      "institution": "Red Rocks Community College"
    },
    {
      "institution": "Regis University"
    },
    {
      "institution": "Rocky Mountain College of Art and Design"
    },
    {
      "institution": "Montessori Education Center of the Rockies"
    },
    {
      "institution": "Colorado State University-Pueblo"
    },
    {
      "institution": "Pickens Technical College"
    },
    {
      "institution": "Intellitec College-Colorado Springs"
    },
    {
      "institution": "Intellitec College-Grand Junction"
    },
    {
      "institution": "Trinidad State Junior College"
    },
    {
      "institution": "University of Colorado System Office"
    },
    {
      "institution": "United States Air Force Academy"
    },
    {
      "institution": "Empire Beauty School-Thornton"
    },
    {
      "institution": "Western State Colorado University"
    },
    {
      "institution": "Yeshiva Toras Chaim Talmudical Seminary"
    },
    {
      "institution": "Albertus Magnus College"
    },
    {
      "institution": "Paul Mitchell the School-Danbury"
    },
    {
      "institution": "Asnuntuck Community College"
    },
    {
      "institution": "Bais Binyomin Academy"
    },
    {
      "institution": "Branford Hall Career Institute-Branford Campus"
    },
    {
      "institution": "Lincoln College of New England-Southington"
    },
    {
      "institution": "Bridgeport Hospital School of Nursing"
    },
    {
      "institution": "University of Bridgeport"
    },
    {
      "institution": "Central Connecticut State University"
    },
    {
      "institution": "Charter Oak State College"
    },
    {
      "institution": "Connecticut Center for Massage Therapy-Newington"
    },
    {
      "institution": "Connecticut College"
    },
    {
      "institution": "Marinello Schools of Beauty-East Hartford"
    },
    {
      "institution": "Porter and Chester Institute of Branford"
    },
    {
      "institution": "University of Connecticut"
    },
    {
      "institution": "Goodwin College"
    },
    {
      "institution": "Lincoln Technical Institute-East Windsor"
    },
    {
      "institution": "Eastern Connecticut State University"
    },
    {
      "institution": "Fairfield University"
    },
    {
      "institution": "Northhaven Academy"
    },
    {
      "institution": "Capital Community College"
    },
    {
      "institution": "Rensselaer Hartford Graduate Center Inc"
    },
    {
      "institution": "Fox Institute of Business-West Hartford"
    },
    {
      "institution": "Hartford Seminary"
    },
    {
      "institution": "University of Hartford"
    },
    {
      "institution": "Holy Apostles College and Seminary"
    },
    {
      "institution": "Housatonic Community College"
    },
    {
      "institution": "Sanford-Brown College-Farmington"
    },
    {
      "institution": "The Leon Institute of Hair Design"
    },
    {
      "institution": "Lyme Academy College of Fine Arts"
    },
    {
      "institution": "Manchester Community College"
    },
    {
      "institution": "Naugatuck Valley Community College"
    },
    {
      "institution": "Middlesex Community College"
    },
    {
      "institution": "Mitchell College"
    },
    {
      "institution": "Three Rivers Community College"
    },
    {
      "institution": "Lincoln Technical Institute-New Britain"
    },
    {
      "institution": "New England Tractor Trailer Training School of Connecticut"
    },
    {
      "institution": "University of New Haven"
    },
    {
      "institution": "Ridley-Lowell Business & Technical Institute-New London"
    },
    {
      "institution": "Norwalk Community College"
    },
    {
      "institution": "Northwestern Connecticut Community College"
    },
    {
      "institution": "Paier College of Art Inc"
    },
    {
      "institution": "Marinello Schools of Beauty-Meriden"
    },
    {
      "institution": "Porter and Chester Institute of Stratford"
    },
    {
      "institution": "Post University"
    },
    {
      "institution": "Quinebaug Valley Community College"
    },
    {
      "institution": "Quinnipiac University"
    },
    {
      "institution": "Sacred Heart University"
    },
    {
      "institution": "University of Saint Joseph"
    },
    {
      "institution": "Gateway Community College"
    },
    {
      "institution": "St Vincent's College"
    },
    {
      "institution": "Southern Connecticut State University"
    },
    {
      "institution": "Stone Academy-Hamden"
    },
    {
      "institution": "Tri-State College of Acupuncture"
    },
    {
      "institution": "Trinity College"
    },
    {
      "institution": "Tunxis Community College"
    },
    {
      "institution": "United States Coast Guard Academy"
    },
    {
      "institution": "Wesleyan University"
    },
    {
      "institution": "Western Connecticut State University"
    },
    {
      "institution": "Yale-New Haven Hospital Dietetic Internship"
    },
    {
      "institution": "Yale University"
    },
    {
      "institution": "Beebe Medical Center Margaret H Rollins School of Nursing"
    },
    {
      "institution": "Dawn Career Institute Inc"
    },
    {
      "institution": "Delaware Technical Community College-Central Office"
    },
    {
      "institution": "Delaware Technical Community College-Owens"
    },
    {
      "institution": "Delaware Technical Community College-Terry"
    },
    {
      "institution": "Delaware Technical Community College-Stanton/Wilmington"
    },
    {
      "institution": "Delaware State University"
    },
    {
      "institution": "University of Delaware"
    },
    {
      "institution": "Goldey-Beacom College"
    },
    {
      "institution": "Schilling-Douglas School of Hair Design"
    },
    {
      "institution": "Wesley College"
    },
    {
      "institution": "Wilmington University"
    },
    {
      "institution": "American University"
    },
    {
      "institution": "Catholic University of America"
    },
    {
      "institution": "Corcoran College of Art and Design"
    },
    {
      "institution": "University of the District of Columbia"
    },
    {
      "institution": "Pontifical Faculty of the Immaculate Conception at the Dominican House of Studies"
    },
    {
      "institution": "Gallaudet University"
    },
    {
      "institution": "George Washington University"
    },
    {
      "institution": "Georgetown University"
    },
    {
      "institution": "Howard University"
    },
    {
      "institution": "Medtech Institute"
    },
    {
      "institution": "Strayer University-District of Columbia"
    },
    {
      "institution": "National Conservatory of Dramatic Arts"
    },
    {
      "institution": "Trinity Washington University"
    },
    {
      "institution": "Wesley Theological Seminary"
    },
    {
      "institution": "Wyotech-Daytona"
    },
    {
      "institution": "The Art Institute of Fort Lauderdale"
    },
    {
      "institution": "Atlantic Technical Center"
    },
    {
      "institution": "The Baptist College of Florida"
    },
    {
      "institution": "Barry University"
    },
    {
      "institution": "Gooding Institute of Nurse Anesthesia"
    },
    {
      "institution": "Bethune-Cookman University"
    },
    {
      "institution": "Lynn University"
    },
    {
      "institution": "GUTI The Premier Beauty & Wellness Academy"
    },
    {
      "institution": "Bradford-Union Technical Center"
    },
    {
      "institution": "Eastern Florida State College"
    },
    {
      "institution": "Broward College"
    },
    {
      "institution": "Fortis College-Winter Park"
    },
    {
      "institution": "Carlos Albizu University-Miami"
    },
    {
      "institution": "College of Central Florida"
    },
    {
      "institution": "Johnson University Florida"
    },
    {
      "institution": "University of Central Florida"
    },
    {
      "institution": "Charlotte Technical Center"
    },
    {
      "institution": "Chipola College"
    },
    {
      "institution": "Clearwater Christian College"
    },
    {
      "institution": "Lorenzo Walker Institute of Technology"
    },
    {
      "institution": "Daytona State College"
    },
    {
      "institution": "South University-West Palm Beach"
    },
    {
      "institution": "Eckerd College"
    },
    {
      "institution": "Edison State College"
    },
    {
      "institution": "Edward Waters College"
    },
    {
      "institution": "Embry-Riddle Aeronautical University-Daytona Beach"
    },
    {
      "institution": "Florida Agricultural and Mechanical University"
    },
    {
      "institution": "Florida Atlantic University"
    },
    {
      "institution": "Florida State College at Jacksonville"
    },
    {
      "institution": "Flagler College-St Augustine"
    },
    {
      "institution": "Florida College"
    },
    {
      "institution": "Concorde Career Institute-Jacksonville"
    },
    {
      "institution": "Concorde Career Institute-Miramar"
    },
    {
      "institution": "Concorde Career Institute-Tampa"
    },
    {
      "institution": "Adventist University of Health Sciences"
    },
    {
      "institution": "Florida Institute of Technology"
    },
    {
      "institution": "Florida Institute of Ultrasound Inc"
    },
    {
      "institution": "Florida International University"
    },
    {
      "institution": "Florida Keys Community College"
    },
    {
      "institution": "Florida Memorial University"
    },
    {
      "institution": "Florida Career College-Miami"
    },
    {
      "institution": "Florida School of Massage"
    },
    {
      "institution": "Florida Southern College"
    },
    {
      "institution": "Florida State University"
    },
    {
      "institution": "Florida Technical College"
    },
    {
      "institution": "University of Southernmost Florida"
    },
    {
      "institution": "University of Florida"
    },
    {
      "institution": "Everest University-Pompano Beach"
    },
    {
      "institution": "Fort Pierce Beauty Academy"
    },
    {
      "institution": "Full Sail University"
    },
    {
      "institution": "George Stone Technical Center"
    },
    {
      "institution": "George T Baker Aviation School"
    },
    {
      "institution": "Gulf Coast State College"
    },
    {
      "institution": "Key College"
    },
    {
      "institution": "Hillsborough Community College"
    },
    {
      "institution": "Hobe Sound Bible College"
    },
    {
      "institution": "Hollywood Institute of Beauty Careers"
    },
    {
      "institution": "Cortiva Institute-Florida"
    },
    {
      "institution": "Indian River State College"
    },
    {
      "institution": "International Academy of Design and Technology-Tampa"
    },
    {
      "institution": "International Academy"
    },
    {
      "institution": "AI Miami International University of Art and Design"
    },
    {
      "institution": "ITT Technical Institute-Tampa"
    },
    {
      "institution": "Jacksonville University"
    },
    {
      "institution": "Jones College-Jacksonville"
    },
    {
      "institution": "Keiser University-Ft Lauderdale"
    },
    {
      "institution": "Heritage Institute-Ft Myers"
    },
    {
      "institution": "La Belle Beauty School"
    },
    {
      "institution": "Florida Gateway College"
    },
    {
      "institution": "Lake Technical Center"
    },
    {
      "institution": "Lake-Sumter State College"
    },
    {
      "institution": "Fort Myers Institute of Technology"
    },
    {
      "institution": "Lively Technical Center"
    },
    {
      "institution": "Lindsey Hopkins Technical Education Center"
    },
    {
      "institution": "Loraines Academy Inc"
    },
    {
      "institution": "Luther Rice University & Seminary"
    },
    {
      "institution": "State College of Florida-Manatee-Sarasota"
    },
    {
      "institution": "Manatee Technical Institute"
    },
    {
      "institution": "Manhattan Hairstyling Academy"
    },
    {
      "institution": "Traviss Career Center"
    },
    {
      "institution": "Trinity International University-Florida"
    },
    {
      "institution": "Miami Lakes Educational Center"
    },
    {
      "institution": "Miami Dade College"
    },
    {
      "institution": "University of Miami"
    },
    {
      "institution": "Mid Florida Tech"
    },
    {
      "institution": "Beauty Schools of America-Miami"
    },
    {
      "institution": "Remington College-Tampa Campus"
    },
    {
      "institution": "Everest Institute-North Miami"
    },
    {
      "institution": "Everest Institute-Hialeah"
    },
    {
      "institution": "Academy of Healing Arts Massage & Facial Skin Care"
    },
    {
      "institution": "Lincoln College of Technology-West Palm Beach"
    },
    {
      "institution": "Fortis College-Tampa"
    },
    {
      "institution": "Paul Mitchell the School-Jacksonville"
    },
    {
      "institution": "North Florida Community College"
    },
    {
      "institution": "University of North Florida"
    },
    {
      "institution": "Northwood University-Florida"
    },
    {
      "institution": "Nova Southeastern University"
    },
    {
      "institution": "Northwest Florida State College"
    },
    {
      "institution": "Orange Park International School of Beauty"
    },
    {
      "institution": "Everest University-North Orlando"
    },
    {
      "institution": "Orlando Tech"
    },
    {
      "institution": "Palm Beach Atlantic University"
    },
    {
      "institution": "Palm Beach State College"
    },
    {
      "institution": "Pasco-Hernando Community College"
    },
    {
      "institution": "Pensacola State College"
    },
    {
      "institution": "Pinellas Technical Education Center-Clearwater"
    },
    {
      "institution": "Polk State College"
    },
    {
      "institution": "Radford M Locklin Technical Center"
    },
    {
      "institution": "Saint Vincent de Paul Regional Seminary"
    },
    {
      "institution": "Ridge Career Center"
    },
    {
      "institution": "Ringling College of Art and Design"
    },
    {
      "institution": "Toni & Guy Hairdressing Academy-Jacksonville"
    },
    {
      "institution": "Robert Morgan Educational Center"
    },
    {
      "institution": "Rollins College"
    },
    {
      "institution": "First Coast Technical College"
    },
    {
      "institution": "Saint Leo University"
    },
    {
      "institution": "St Petersburg College"
    },
    {
      "institution": "Pinellas Technical Education Center-St Petersburg"
    },
    {
      "institution": "Santa Fe College"
    },
    {
      "institution": "Sarasota County Technical Institute"
    },
    {
      "institution": "Argosy University-Sarasota"
    },
    {
      "institution": "Seminole State College of Florida"
    },
    {
      "institution": "Sheridan Technical Center"
    },
    {
      "institution": "Saint John Vianney College Seminary"
    },
    {
      "institution": "Saint Johns River State College"
    },
    {
      "institution": "South Florida State College"
    },
    {
      "institution": "University of South Florida-Main Campus"
    },
    {
      "institution": "St Thomas University"
    },
    {
      "institution": "Stenotype Institute of Jacksonville Inc-Jacksonville"
    },
    {
      "institution": "Stetson University"
    },
    {
      "institution": "Southeastern University"
    },
    {
      "institution": "Benes International School of Beauty"
    },
    {
      "institution": "Suwannee-Hamilton Technical Center"
    },
    {
      "institution": "Tallahassee Community College"
    },
    {
      "institution": "Talmudic College of Florida"
    },
    {
      "institution": "Everest University-Tampa"
    },
    {
      "institution": "Everest University-Largo"
    },
    {
      "institution": "The University of Tampa"
    },
    {
      "institution": "Taylor Technical Institute"
    },
    {
      "institution": "Tom P Haney Technical Center"
    },
    {
      "institution": "Trinity Baptist College"
    },
    {
      "institution": "Trinity College of Florida"
    },
    {
      "institution": "Fashion Focus Hair Academy"
    },
    {
      "institution": "Valencia College"
    },
    {
      "institution": "Warner University"
    },
    {
      "institution": "Washington-Holmes Technical Center"
    },
    {
      "institution": "Webber International University"
    },
    {
      "institution": "Rasmussen College-Florida"
    },
    {
      "institution": "The University of West Florida"
    },
    {
      "institution": "Westside Tech"
    },
    {
      "institution": "William T McFatter Technical Center"
    },
    {
      "institution": "Winter Park Tech"
    },
    {
      "institution": "Withlacoochee Technical Institute"
    },
    {
      "institution": "Abraham Baldwin Agricultural College"
    },
    {
      "institution": "Agnes Scott College"
    },
    {
      "institution": "Interactive College of Technology-Chamblee"
    },
    {
      "institution": "Interactive College of Technology-Morrow"
    },
    {
      "institution": "Albany Technical College"
    },
    {
      "institution": "Darton State College"
    },
    {
      "institution": "Albany State University"
    },
    {
      "institution": "Andrew College"
    },
    {
      "institution": "Armstrong Atlantic State University"
    },
    {
      "institution": "The Art Institute of Atlanta"
    },
    {
      "institution": "Georgia Career Institute"
    },
    {
      "institution": "Atlanta Technical College"
    },
    {
      "institution": "Point University"
    },
    {
      "institution": "Atlanta Metropolitan State College"
    },
    {
      "institution": "Atlanta's John Marshall Law School"
    },
    {
      "institution": "Atlanta School of Massage"
    },
    {
      "institution": "Clark Atlanta University"
    },
    {
      "institution": "Augusta Technical College"
    },
    {
      "institution": "Augusta State University"
    },
    {
      "institution": "Bainbridge State College"
    },
    {
      "institution": "Bauder College"
    },
    {
      "institution": "Beauty College of America"
    },
    {
      "institution": "Berry College"
    },
    {
      "institution": "Beulah Heights University"
    },
    {
      "institution": "Brenau University"
    },
    {
      "institution": "Brewton-Parker College"
    },
    {
      "institution": "Brown College of Court Reporting"
    },
    {
      "institution": "College of Coastal Georgia"
    },
    {
      "institution": "West Georgia Technical College"
    },
    {
      "institution": "Carver Bible College"
    },
    {
      "institution": "Clayton  State University"
    },
    {
      "institution": "Columbia Theological Seminary"
    },
    {
      "institution": "Columbus Technical College"
    },
    {
      "institution": "Columbus State University"
    },
    {
      "institution": "Georgia Northwestern Technical College"
    },
    {
      "institution": "Covenant College"
    },
    {
      "institution": "Dalton State College"
    },
    {
      "institution": "Pro Way Hair School"
    },
    {
      "institution": "DeVry University-Georgia"
    },
    {
      "institution": "South University-Savannah"
    },
    {
      "institution": "East Georgia State College"
    },
    {
      "institution": "Emmanuel College"
    },
    {
      "institution": "Emory University"
    },
    {
      "institution": "Georgia Highlands College"
    },
    {
      "institution": "Fort Valley State University"
    },
    {
      "institution": "Grady Health System Professional Schools"
    },
    {
      "institution": "Georgia Institute of Technology-Main Campus"
    },
    {
      "institution": "Georgia Southwestern State University"
    },
    {
      "institution": "Gainesville State College"
    },
    {
      "institution": "Georgia College and State University"
    },
    {
      "institution": "Georgia Military College"
    },
    {
      "institution": "Georgia Southern University"
    },
    {
      "institution": "Georgia State University"
    },
    {
      "institution": "University of Georgia"
    },
    {
      "institution": "Gordon State College"
    },
    {
      "institution": "Southern Crescent Technical College"
    },
    {
      "institution": "Gupton Jones College of Funeral Service"
    },
    {
      "institution": "Gwinnett College-Lilburn"
    },
    {
      "institution": "Gwinnett Technical College"
    },
    {
      "institution": "Middle Georgia Technical College"
    },
    {
      "institution": "Interdenominational Theological Center"
    },
    {
      "institution": "Kennesaw State University"
    },
    {
      "institution": "LaGrange College"
    },
    {
      "institution": "Lanier Technical College"
    },
    {
      "institution": "Life University"
    },
    {
      "institution": "Central Georgia Technical College"
    },
    {
      "institution": "Macon State College"
    },
    {
      "institution": "Chattahoochee Technical College"
    },
    {
      "institution": "Herzing University-Atlanta"
    },
    {
      "institution": "Georgia Health Sciences University"
    },
    {
      "institution": "Mercer University"
    },
    {
      "institution": "Middle Georgia College"
    },
    {
      "institution": "Morehouse College"
    },
    {
      "institution": "Morehouse School of Medicine"
    },
    {
      "institution": "Moultrie Technical College"
    },
    {
      "institution": "University of North Georgia"
    },
    {
      "institution": "North Georgia Technical College"
    },
    {
      "institution": "Oglethorpe University"
    },
    {
      "institution": "Paine College"
    },
    {
      "institution": "Piedmont College"
    },
    {
      "institution": "Portfolio Center"
    },
    {
      "institution": "Reinhardt University"
    },
    {
      "institution": "Savannah Technical College"
    },
    {
      "institution": "Savannah College of Art and Design"
    },
    {
      "institution": "Savannah State University"
    },
    {
      "institution": "Shorter University"
    },
    {
      "institution": "South Georgia College"
    },
    {
      "institution": "South Georgia Technical College"
    },
    {
      "institution": "The Creative Circus"
    },
    {
      "institution": "Spelman College"
    },
    {
      "institution": "Southern Polytechnic State University"
    },
    {
      "institution": "Southwest Georgia Technical College"
    },
    {
      "institution": "Thomas University"
    },
    {
      "institution": "Toccoa Falls College"
    },
    {
      "institution": "Truett-McConnell College"
    },
    {
      "institution": "Wiregrass Georgia Technical College"
    },
    {
      "institution": "Valdosta State University"
    },
    {
      "institution": "Waycross College"
    },
    {
      "institution": "Wesleyan College"
    },
    {
      "institution": "University of West Georgia"
    },
    {
      "institution": "Young Harris College"
    },
    {
      "institution": "Heald College-Honolulu"
    },
    {
      "institution": "Chaminade University of Honolulu"
    },
    {
      "institution": "University of Hawaii at Hilo"
    },
    {
      "institution": "University of Hawaii at Manoa"
    },
    {
      "institution": "Hawaii Institute of Hair Design"
    },
    {
      "institution": "Hawaii Pacific University"
    },
    {
      "institution": "Honolulu Community College"
    },
    {
      "institution": "Kapiolani Community College"
    },
    {
      "institution": "Kauai Community College"
    },
    {
      "institution": "Leeward Community College"
    },
    {
      "institution": "University of Hawaii Maui College"
    },
    {
      "institution": "Med-Assist School of Hawaii Inc"
    },
    {
      "institution": "World Medicine Institute"
    },
    {
      "institution": "Travel Institute of the Pacific"
    },
    {
      "institution": "University of Hawaii System Office"
    },
    {
      "institution": "University of Hawaii-West Oahu"
    },
    {
      "institution": "Windward Community College"
    },
    {
      "institution": "Carrington College-Boise"
    },
    {
      "institution": "Boise Bible College"
    },
    {
      "institution": "Boise State University"
    },
    {
      "institution": "Eastern Idaho Technical College"
    },
    {
      "institution": "Idaho State University"
    },
    {
      "institution": "University of Idaho"
    },
    {
      "institution": "The College of Idaho"
    },
    {
      "institution": "Lewis-Clark State College"
    },
    {
      "institution": "ITT Technical Institute-Boise"
    },
    {
      "institution": "Joseph Charles Institute of Cosmetology"
    },
    {
      "institution": "Mr Leon's School of Hair Design-Moscow"
    },
    {
      "institution": "North Idaho College"
    },
    {
      "institution": "Northwest Nazarene University"
    },
    {
      "institution": "The School of Hairstyling"
    },
    {
      "institution": "Brigham Young University-Idaho"
    },
    {
      "institution": "College of Southern Idaho"
    },
    {
      "institution": "Adler School of Professional Psychology"
    },
    {
      "institution": "Alvareitas College of Cosmetology-Edwardsville"
    },
    {
      "institution": "Alvareitas College of Cosmetology-Godfrey"
    },
    {
      "institution": "American Academy of Art"
    },
    {
      "institution": "School of the Art Institute of Chicago"
    },
    {
      "institution": "The College of Office Technology"
    },
    {
      "institution": "Augustana College"
    },
    {
      "institution": "Aurora University"
    },
    {
      "institution": "Concept College of Cosmetology"
    },
    {
      "institution": "Southwestern Illinois College"
    },
    {
      "institution": "Bethany Theological Seminary"
    },
    {
      "institution": "Black Hawk College"
    },
    {
      "institution": "Blackburn College"
    },
    {
      "institution": "Blessing Rieman College of Nursing"
    },
    {
      "institution": "Blessing Hospital School of Radiologic Technology"
    },
    {
      "institution": "Bradley University"
    },
    {
      "institution": "Paul Mitchell the School-Bradley"
    },
    {
      "institution": "Cameo Beauty Academy"
    },
    {
      "institution": "Cannella School of Hair Design-Villa Park"
    },
    {
      "institution": "Cannella School of Hair Design-Chicago"
    },
    {
      "institution": "Cannella School of Hair Design-Chicago"
    },
    {
      "institution": "Cannella School of Hair Design-Elgin"
    },
    {
      "institution": "Capri Beauty College"
    },
    {
      "institution": "Empire Beauty School-Hanover Park"
    },
    {
      "institution": "Capri Beauty College"
    },
    {
      "institution": "Carl Sandburg College"
    },
    {
      "institution": "Catholic Theological Union at Chicago"
    },
    {
      "institution": "La James International College-East Moline"
    },
    {
      "institution": "Midwestern University-Downers Grove"
    },
    {
      "institution": "The Chicago School of Professional Psychology at Chicago"
    },
    {
      "institution": "Chicago State University"
    },
    {
      "institution": "Chicago Theological Seminary"
    },
    {
      "institution": "University of Chicago"
    },
    {
      "institution": "City Colleges of Chicago-Kennedy-King College"
    },
    {
      "institution": "City Colleges of Chicago-Malcolm X College"
    },
    {
      "institution": "City Colleges of Chicago-Olive-Harvey College"
    },
    {
      "institution": "City Colleges of Chicago-Harry S Truman College"
    },
    {
      "institution": "City Colleges of Chicago-Richard J Daley College"
    },
    {
      "institution": "City Colleges of Chicago-Harold Washington College"
    },
    {
      "institution": "City Colleges of Chicago-Wilbur Wright College"
    },
    {
      "institution": "Columbia College-Chicago"
    },
    {
      "institution": "Concordia University-Chicago"
    },
    {
      "institution": "Le Cordon Bleu College of Culinary Arts-Chicago"
    },
    {
      "institution": "Coyne College"
    },
    {
      "institution": "City Colleges of Chicago-District Office"
    },
    {
      "institution": "Danville Area Community College"
    },
    {
      "institution": "Concept College of Cosmetology"
    },
    {
      "institution": "DePaul University"
    },
    {
      "institution": "DeVry University-Illinois"
    },
    {
      "institution": "DeVry University-Administrative Office"
    },
    {
      "institution": "Cosmetology & Spa Academy"
    },
    {
      "institution": "College of DuPage"
    },
    {
      "institution": "East-West University"
    },
    {
      "institution": "Eastern Illinois University"
    },
    {
      "institution": "Elgin Community College"
    },
    {
      "institution": "Elmhurst College"
    },
    {
      "institution": "Eureka College"
    },
    {
      "institution": "First Institute Inc"
    },
    {
      "institution": "Fox College"
    },
    {
      "institution": "Garrett-Evangelical Theological Seminary"
    },
    {
      "institution": "Gem City College"
    },
    {
      "institution": "Governors State University"
    },
    {
      "institution": "Graham Hospital School of Nursing"
    },
    {
      "institution": "Greenville College"
    },
    {
      "institution": "Hair Professionals Academy of Cosmetology"
    },
    {
      "institution": "Hair Professionals Career College"
    },
    {
      "institution": "Hair Professionals School of Cosmetology"
    },
    {
      "institution": "Harrington College of Design"
    },
    {
      "institution": "Hebrew Theological College"
    },
    {
      "institution": "Highland Community College"
    },
    {
      "institution": "Rosalind Franklin University of Medicine and Science"
    },
    {
      "institution": "University of Illinois at Chicago"
    },
    {
      "institution": "Benedictine University"
    },
    {
      "institution": "Illinois College of Optometry"
    },
    {
      "institution": "University of Illinois at Urbana-Champaign"
    },
    {
      "institution": "Illinois Wesleyan University"
    },
    {
      "institution": "Illinois Central College"
    },
    {
      "institution": "Illinois College"
    },
    {
      "institution": "Olney Central College"
    },
    {
      "institution": "Illinois Institute of Technology"
    },
    {
      "institution": "Argosy University-Chicago"
    },
    {
      "institution": "Illinois State University"
    },
    {
      "institution": "Illinois Valley Community College"
    },
    {
      "institution": "Institute for Clinical Social Work"
    },
    {
      "institution": "International Academy of Design and Technology-Chicago"
    },
    {
      "institution": "John A Logan College"
    },
    {
      "institution": "The John Marshall Law School"
    },
    {
      "institution": "John Wood Community College"
    },
    {
      "institution": "Joliet Junior College"
    },
    {
      "institution": "Judson University"
    },
    {
      "institution": "Kankakee Community College"
    },
    {
      "institution": "Kaskaskia College"
    },
    {
      "institution": "DeVry University's Keller Graduate School of Management-Illinois"
    },
    {
      "institution": "Kendall College"
    },
    {
      "institution": "Kishwaukee College"
    },
    {
      "institution": "Knox College"
    },
    {
      "institution": "Educators of Beauty College of Cosmetology-La Salle"
    },
    {
      "institution": "College of Lake County"
    },
    {
      "institution": "Lake Forest College"
    },
    {
      "institution": "Lake Forest Graduate School of Management"
    },
    {
      "institution": "Lake Land College"
    },
    {
      "institution": "Lakeview College of Nursing"
    },
    {
      "institution": "Lewis and Clark Community College"
    },
    {
      "institution": "Lewis University"
    },
    {
      "institution": "Lexington College"
    },
    {
      "institution": "Lincoln Christian University"
    },
    {
      "institution": "Lincoln College"
    },
    {
      "institution": "Lincoln Land Community College"
    },
    {
      "institution": "Lincoln College of Technology-Melrose Park"
    },
    {
      "institution": "Loyola University Chicago"
    },
    {
      "institution": "Lutheran School of Theology at Chicago"
    },
    {
      "institution": "Trinity College of Nursing & Health Sciences"
    },
    {
      "institution": "CET-Chicago"
    },
    {
      "institution": "Mac Daniels Beauty School"
    },
    {
      "institution": "MacCormac College"
    },
    {
      "institution": "MacMurray College"
    },
    {
      "institution": "McCormick Theological Seminary"
    },
    {
      "institution": "McHenry County College"
    },
    {
      "institution": "McKendree University"
    },
    {
      "institution": "Meadville Lombard Theological School"
    },
    {
      "institution": "Methodist College"
    },
    {
      "institution": "Midstate College"
    },
    {
      "institution": "Millikin University"
    },
    {
      "institution": "Monmouth College"
    },
    {
      "institution": "Moody Bible Institute"
    },
    {
      "institution": "Moraine Valley Community College"
    },
    {
      "institution": "Morrison Institute of Technology"
    },
    {
      "institution": "Morton College"
    },
    {
      "institution": "Mr John's School of Cosmetology Esthetics & Nails-Decatur"
    },
    {
      "institution": "National Louis University"
    },
    {
      "institution": "National University of Health Sciences"
    },
    {
      "institution": "Niles School of Cosmetology"
    },
    {
      "institution": "North Central College"
    },
    {
      "institution": "North Park University"
    },
    {
      "institution": "Northern Baptist Theological Seminary"
    },
    {
      "institution": "Northern Illinois University"
    },
    {
      "institution": "Northwestern College-Chicago Campus"
    },
    {
      "institution": "Northwestern University"
    },
    {
      "institution": "Northeastern Illinois University"
    },
    {
      "institution": "Oakton Community College"
    },
    {
      "institution": "Oehrlein School of Cosmetology"
    },
    {
      "institution": "Olivet Nazarene University"
    },
    {
      "institution": "Parkland College"
    },
    {
      "institution": "Pivot Point Academy-Evanston"
    },
    {
      "institution": "Prairie State College"
    },
    {
      "institution": "Principia College"
    },
    {
      "institution": "Professional's Choice Hair Design Academy"
    },
    {
      "institution": "Quincy University"
    },
    {
      "institution": "Vatterott College-Quincy"
    },
    {
      "institution": "The Illinois Institute of Art-Chicago"
    },
    {
      "institution": "Rend Lake College"
    },
    {
      "institution": "Richland Community College"
    },
    {
      "institution": "Robert Morris University Illinois"
    },
    {
      "institution": "Rock Valley College"
    },
    {
      "institution": "Madison Media Institute - Rockford Career College"
    },
    {
      "institution": "Rockford University"
    },
    {
      "institution": "Roosevelt University"
    },
    {
      "institution": "Dominican University"
    },
    {
      "institution": "Rush University"
    },
    {
      "institution": "Saint Francis Medical Center College of Nursing"
    },
    {
      "institution": "University of St Francis"
    },
    {
      "institution": "St John's College of Nursing"
    },
    {
      "institution": "Saint Xavier University"
    },
    {
      "institution": "University of Illinois at Springfield"
    },
    {
      "institution": "Sauk Valley Community College"
    },
    {
      "institution": "Seabury-Western Theological Seminary"
    },
    {
      "institution": "Shawnee Community College"
    },
    {
      "institution": "Shimer College"
    },
    {
      "institution": "Saint Augustine College"
    },
    {
      "institution": "University of Saint Mary of the Lake"
    },
    {
      "institution": "Southeastern Illinois College"
    },
    {
      "institution": "National Latino Education Institute"
    },
    {
      "institution": "Spertus College"
    },
    {
      "institution": "Spoon River College"
    },
    {
      "institution": "Saint Anthony College of Nursing"
    },
    {
      "institution": "Educators of Beauty College of Cosmetology-Sterling"
    },
    {
      "institution": "Southern Illinois University-Carbondale"
    },
    {
      "institution": "Southern Illinois University-Edwardsville"
    },
    {
      "institution": "Southern Illinois University-System Office"
    },
    {
      "institution": "Taylor Business Institute"
    },
    {
      "institution": "Telshe Yeshiva-Chicago"
    },
    {
      "institution": "South Suburban College"
    },
    {
      "institution": "Tri-County Beauty Academy"
    },
    {
      "institution": "Trinity Christian College"
    },
    {
      "institution": "Trinity International University-Illinois"
    },
    {
      "institution": "Triton College"
    },
    {
      "institution": "University of Spa & Cosmetology Arts"
    },
    {
      "institution": "University of Illinois University Administration"
    },
    {
      "institution": "VanderCook College of Music"
    },
    {
      "institution": "Waubonsee Community College"
    },
    {
      "institution": "Resurrection University"
    },
    {
      "institution": "Western Illinois University"
    },
    {
      "institution": "Wheaton College"
    },
    {
      "institution": "Harper College"
    },
    {
      "institution": "Ancilla College"
    },
    {
      "institution": "Anderson University"
    },
    {
      "institution": "Apex Academy of Hair Design Inc"
    },
    {
      "institution": "Ball State University"
    },
    {
      "institution": "Bethel College-Indiana"
    },
    {
      "institution": "Butler University"
    },
    {
      "institution": "Calumet College of Saint Joseph"
    },
    {
      "institution": "Christian Theological Seminary"
    },
    {
      "institution": "College of Court Reporting Inc"
    },
    {
      "institution": "Concordia Theological Seminary"
    },
    {
      "institution": "Tricoci University of Beauty Culture-Highland"
    },
    {
      "institution": "DePauw University"
    },
    {
      "institution": "Don Roberts School of Hair Design"
    },
    {
      "institution": "Don Roberts Beauty School"
    },
    {
      "institution": "Earlham College"
    },
    {
      "institution": "University of Evansville"
    },
    {
      "institution": "Franklin College"
    },
    {
      "institution": "Good Samaritan Hospital School of Radiologic Technology"
    },
    {
      "institution": "Goshen College"
    },
    {
      "institution": "Grace College and Theological Seminary"
    },
    {
      "institution": "Hair Fashions By Kaye Beauty College-Noblesville"
    },
    {
      "institution": "Hair Fashions By Kaye Beauty College-Indianapolis"
    },
    {
      "institution": "Hanover College"
    },
    {
      "institution": "J Michael Harrold Beauty Academy"
    },
    {
      "institution": "Holy Cross College"
    },
    {
      "institution": "PJ's College of Cosmetology-Clarksville"
    },
    {
      "institution": "Huntington University"
    },
    {
      "institution": "Ivy Tech Community College"
    },
    {
      "institution": "Indiana University-Purdue University-Fort Wayne"
    },
    {
      "institution": "Indiana University-Purdue University-Indianapolis"
    },
    {
      "institution": "Harrison College-Indianapolis"
    },
    {
      "institution": "University of Indianapolis"
    },
    {
      "institution": "Indiana Institute of Technology"
    },
    {
      "institution": "University of Southern Indiana"
    },
    {
      "institution": "Indiana State University"
    },
    {
      "institution": "Indiana University-Kokomo"
    },
    {
      "institution": "Indiana University-South Bend"
    },
    {
      "institution": "Indiana University-Bloomington"
    },
    {
      "institution": "Indiana University-Northwest"
    },
    {
      "institution": "Indiana University-Southeast"
    },
    {
      "institution": "Indiana University-East"
    },
    {
      "institution": "International Business College-Fort Wayne"
    },
    {
      "institution": "International Business College-Indianapolis"
    },
    {
      "institution": "ITT Educational Services Inc-System Office"
    },
    {
      "institution": "ITT Technical Institute-Nashville"
    },
    {
      "institution": "ITT Technical Institute-Fort Wayne"
    },
    {
      "institution": "ITT Technical Institute-Indianapolis"
    },
    {
      "institution": "J Everett Light Career Center"
    },
    {
      "institution": "Knox Beauty College"
    },
    {
      "institution": "Lafayette Beauty Academy"
    },
    {
      "institution": "Brown Mackie College-Merrillville"
    },
    {
      "institution": "Brown Mackie College-Michigan City"
    },
    {
      "institution": "Empire Beauty School-Indianapolis"
    },
    {
      "institution": "Lincoln College of Technology-Indianapolis"
    },
    {
      "institution": "Manchester University"
    },
    {
      "institution": "Marian University"
    },
    {
      "institution": "Indiana Wesleyan University"
    },
    {
      "institution": "Martin University"
    },
    {
      "institution": "Masters of Cosmetology College"
    },
    {
      "institution": "Anabaptist Mennonite Biblical Seminary"
    },
    {
      "institution": "Merrillville Beauty College"
    },
    {
      "institution": "Brown Mackie College-South Bend"
    },
    {
      "institution": "Mid-America College of Funeral Service"
    },
    {
      "institution": "West Michigan College of Barbering and Beauty"
    },
    {
      "institution": "University of Notre Dame"
    },
    {
      "institution": "Oakland City University"
    },
    {
      "institution": "PJ's College of Cosmetology-Richmond"
    },
    {
      "institution": "Kaplan College-Indianapolis"
    },
    {
      "institution": "Purdue University-Calumet Campus"
    },
    {
      "institution": "Purdue University-North Central Campus"
    },
    {
      "institution": "Ravenscroft Beauty College"
    },
    {
      "institution": "Rogers Academy of Hair Design"
    },
    {
      "institution": "Rose-Hulman Institute of Technology"
    },
    {
      "institution": "Rudae's School of Beauty Culture-Kokomo"
    },
    {
      "institution": "University of Saint Francis-Fort Wayne"
    },
    {
      "institution": "Saint Josephs College"
    },
    {
      "institution": "Saint Mary-of-the-Woods College"
    },
    {
      "institution": "Saint Mary's College"
    },
    {
      "institution": "Kaplan College-Hammond"
    },
    {
      "institution": "Kaplan College-Merrillville"
    },
    {
      "institution": "Saint Meinrad School of Theology"
    },
    {
      "institution": "Saint Elizabeth School of Nursing"
    },
    {
      "institution": "Taylor University"
    },
    {
      "institution": "Trine University"
    },
    {
      "institution": "Valparaiso University"
    },
    {
      "institution": "Vincennes Beauty College"
    },
    {
      "institution": "Vincennes University"
    },
    {
      "institution": "Wabash College"
    },
    {
      "institution": "Allen College"
    },
    {
      "institution": "AIB College of Business"
    },
    {
      "institution": "Briar Cliff University"
    },
    {
      "institution": "Buena Vista University"
    },
    {
      "institution": "Capri College-Dubuque"
    },
    {
      "institution": "Capri College-Cedar Rapids"
    },
    {
      "institution": "American College of Hairstyling-Cedar Rapids"
    },
    {
      "institution": "Central College"
    },
    {
      "institution": "Clarke University"
    },
    {
      "institution": "Coe College"
    },
    {
      "institution": "Cornell College"
    },
    {
      "institution": "Iowa School of Beauty-Marshalltown"
    },
    {
      "institution": "Des Moines Area Community College"
    },
    {
      "institution": "Divine Word College"
    },
    {
      "institution": "Dordt College"
    },
    {
      "institution": "Drake University"
    },
    {
      "institution": "University of Dubuque"
    },
    {
      "institution": "Ellsworth Community College"
    },
    {
      "institution": "Emmaus Bible College"
    },
    {
      "institution": "Eastern Iowa Community College District"
    },
    {
      "institution": "Faith Baptist Bible College and Theological Seminary"
    },
    {
      "institution": "Faust Institute of Cosmetology-Storm Lake"
    },
    {
      "institution": "Graceland University-Lamoni"
    },
    {
      "institution": "Grand View University"
    },
    {
      "institution": "Grinnell College"
    },
    {
      "institution": "Kaplan University-Mason City Campus"
    },
    {
      "institution": "Kaplan University-Cedar Rapids Campus"
    },
    {
      "institution": "Hamilton Technical College"
    },
    {
      "institution": "Hawkeye Community College"
    },
    {
      "institution": "American Hair Academy"
    },
    {
      "institution": "Indian Hills Community College"
    },
    {
      "institution": "Iowa Central Community College"
    },
    {
      "institution": "Iowa Lakes Community College"
    },
    {
      "institution": "UnityPoint Health-Des Moines School of Radiologic Technology"
    },
    {
      "institution": "American College of Hairstyling-Des Moines"
    },
    {
      "institution": "Iowa School of Beauty-Des Moines"
    },
    {
      "institution": "Iowa State University"
    },
    {
      "institution": "Iowa Wesleyan College"
    },
    {
      "institution": "Iowa Western Community College"
    },
    {
      "institution": "University of Iowa"
    },
    {
      "institution": "Kirkwood Community College"
    },
    {
      "institution": "La James International College-Cedar Falls"
    },
    {
      "institution": "La James International College-Johnston"
    },
    {
      "institution": "La James College of Hairstyling and Cosmetology"
    },
    {
      "institution": "La James International College-Ft Dodge"
    },
    {
      "institution": "Loras College"
    },
    {
      "institution": "Luther College"
    },
    {
      "institution": "Maharishi University of Management"
    },
    {
      "institution": "Marshalltown Community College"
    },
    {
      "institution": "Mercy College of Health Sciences"
    },
    {
      "institution": "Morningside College"
    },
    {
      "institution": "Mount Mercy University"
    },
    {
      "institution": "Ashford University"
    },
    {
      "institution": "North Iowa Area Community College"
    },
    {
      "institution": "University of Northern Iowa"
    },
    {
      "institution": "Northwestern College"
    },
    {
      "institution": "Northeast Iowa Community College-Calmar"
    },
    {
      "institution": "Northwest Iowa Community College"
    },
    {
      "institution": "Des Moines University-Osteopathic Medical Center"
    },
    {
      "institution": "Iowa School of Beauty-Ottumwa"
    },
    {
      "institution": "Palmer College of Chiropractic-Davenport"
    },
    {
      "institution": "PCI Academy-Ames"
    },
    {
      "institution": "Saint Ambrose University"
    },
    {
      "institution": "St Luke's College"
    },
    {
      "institution": "La James International College-Davenport"
    },
    {
      "institution": "La James International College-Iowa City"
    },
    {
      "institution": "Simpson College"
    },
    {
      "institution": "Southeastern Community College"
    },
    {
      "institution": "Southwestern Community College"
    },
    {
      "institution": "Capri College-Davenport"
    },
    {
      "institution": "Iowa School of Beauty-Sioux City"
    },
    {
      "institution": "E Q School of Hair Design"
    },
    {
      "institution": "Upper Iowa University"
    },
    {
      "institution": "Waldorf College"
    },
    {
      "institution": "Wartburg College"
    },
    {
      "institution": "Wartburg Theological Seminary"
    },
    {
      "institution": "College of Hair Design"
    },
    {
      "institution": "Western Iowa Tech Community College"
    },
    {
      "institution": "William Penn University"
    },
    {
      "institution": "Allen County Community College"
    },
    {
      "institution": "Baker University"
    },
    {
      "institution": "Barton County Community College"
    },
    {
      "institution": "Benedictine College"
    },
    {
      "institution": "Bethany College"
    },
    {
      "institution": "Bethel College-North Newton"
    },
    {
      "institution": "Brown Mackie College-Kansas City"
    },
    {
      "institution": "Brown Mackie College-Salina"
    },
    {
      "institution": "Bryan University"
    },
    {
      "institution": "Butler Community College"
    },
    {
      "institution": "Central Baptist Theological Seminary"
    },
    {
      "institution": "Central Christian College of Kansas"
    },
    {
      "institution": "Cloud County Community College"
    },
    {
      "institution": "Coffeyville Community College"
    },
    {
      "institution": "Colby Community College"
    },
    {
      "institution": "Cowley County Community College"
    },
    {
      "institution": "Marinello Schools of Beauty-Manhattan"
    },
    {
      "institution": "Dodge City Community College"
    },
    {
      "institution": "Donnelly College"
    },
    {
      "institution": "Emporia State University"
    },
    {
      "institution": "Flint Hills Technical College"
    },
    {
      "institution": "Fort Hays State University"
    },
    {
      "institution": "Barclay College"
    },
    {
      "institution": "Friends University"
    },
    {
      "institution": "Fort Scott Community College"
    },
    {
      "institution": "Garden City Community College"
    },
    {
      "institution": "Haskell Indian Nations University"
    },
    {
      "institution": "Hays Academy of Hair Design"
    },
    {
      "institution": "Hesston College"
    },
    {
      "institution": "Highland Community College"
    },
    {
      "institution": "Hutchinson Community College"
    },
    {
      "institution": "Independence Community College"
    },
    {
      "institution": "Johnson County Community College"
    },
    {
      "institution": "Concorde Career Colleges"
    },
    {
      "institution": "Kansas City Kansas Community College"
    },
    {
      "institution": "University of Kansas"
    },
    {
      "institution": "Newman University"
    },
    {
      "institution": "Old Town Barber College-Wichita"
    },
    {
      "institution": "Kansas State University"
    },
    {
      "institution": "Kansas Wesleyan University"
    },
    {
      "institution": "Washburn Institute of Technology"
    },
    {
      "institution": "La Baron Hairdressing Academy-Overland Park"
    },
    {
      "institution": "Labette Community College"
    },
    {
      "institution": "Manhattan Area Technical College"
    },
    {
      "institution": "Manhattan Christian College"
    },
    {
      "institution": "McPherson College"
    },
    {
      "institution": "MidAmerica Nazarene University"
    },
    {
      "institution": "Neosho County Community College"
    },
    {
      "institution": "North Central Kansas Technical College"
    },
    {
      "institution": "Northwest Kansas Technical College"
    },
    {
      "institution": "Ottawa University-Ottawa"
    },
    {
      "institution": "Ottawa University-Kansas City"
    },
    {
      "institution": "Pittsburg State University"
    },
    {
      "institution": "Pratt Community College"
    },
    {
      "institution": "University of Saint Mary"
    },
    {
      "institution": "Salina Area Technical College"
    },
    {
      "institution": "Seward County Community College and Area Technical School"
    },
    {
      "institution": "Sidneys Hair Dressing College"
    },
    {
      "institution": "Southwestern College"
    },
    {
      "institution": "Sterling College"
    },
    {
      "institution": "Tabor College"
    },
    {
      "institution": "Washburn University"
    },
    {
      "institution": "Wichita Area Technical College"
    },
    {
      "institution": "Wichita State University"
    },
    {
      "institution": "Wichita Technical Institute"
    },
    {
      "institution": "Alice Lloyd College"
    },
    {
      "institution": "Asbury University"
    },
    {
      "institution": "Asbury Theological Seminary"
    },
    {
      "institution": "Ashland Community and Technical College"
    },
    {
      "institution": "Barrett and Company School of Hair Design"
    },
    {
      "institution": "Bellarmine University"
    },
    {
      "institution": "Berea College"
    },
    {
      "institution": "PJ's College of Cosmetology-Bowling Green"
    },
    {
      "institution": "Southcentral Kentucky Community and Technical College"
    },
    {
      "institution": "Brescia University"
    },
    {
      "institution": "Campbellsville University"
    },
    {
      "institution": "Bluegrass Community and Technical College"
    },
    {
      "institution": "Centre College"
    },
    {
      "institution": "Clear Creek Baptist Bible College"
    },
    {
      "institution": "Paul Mitchell the School-Lexington"
    },
    {
      "institution": "Collins School of Cosmetology"
    },
    {
      "institution": "Galen College of Nursing-Louisville"
    },
    {
      "institution": "University of the Cumberlands"
    },
    {
      "institution": "Eastern Kentucky University"
    },
    {
      "institution": "Elizabethtown Community and Technical College"
    },
    {
      "institution": "Ezell's Cosmetology School"
    },
    {
      "institution": "Frontier Nursing University"
    },
    {
      "institution": "Georgetown College"
    },
    {
      "institution": "PJ's College of Cosmetology-Glasgow"
    },
    {
      "institution": "Hazard Community and Technical College"
    },
    {
      "institution": "Paul Mitchell the School-Louisville"
    },
    {
      "institution": "Henderson Community College"
    },
    {
      "institution": "Hopkinsville Community College"
    },
    {
      "institution": "Daymar College-Paducah Main"
    },
    {
      "institution": "Jefferson Community and Technical College"
    },
    {
      "institution": "Jenny Lea Academy of Cosmetology"
    },
    {
      "institution": "The Salon Professional Academy-Lexington"
    },
    {
      "institution": "National College-Lexington"
    },
    {
      "institution": "Kentucky Mountain Bible College"
    },
    {
      "institution": "Kentucky State University"
    },
    {
      "institution": "Kentucky Wesleyan College"
    },
    {
      "institution": "University of Kentucky"
    },
    {
      "institution": "Kentucky Christian University"
    },
    {
      "institution": "Lexington Theological Seminary"
    },
    {
      "institution": "Lindsey Wilson College"
    },
    {
      "institution": "Sullivan College of Technology and Design"
    },
    {
      "institution": "University of Louisville"
    },
    {
      "institution": "Louisville Presbyterian Theological Seminary"
    },
    {
      "institution": "Madisonville Community College"
    },
    {
      "institution": "Maysville Community and Technical College"
    },
    {
      "institution": "Mid-Continent University"
    },
    {
      "institution": "Midway College"
    },
    {
      "institution": "Morehead State University"
    },
    {
      "institution": "Murray State University"
    },
    {
      "institution": "Gateway Community and Technical College"
    },
    {
      "institution": "Northern Kentucky University"
    },
    {
      "institution": "Nutek Academy of Beauty Inc"
    },
    {
      "institution": "Daymar College-Owensboro"
    },
    {
      "institution": "West Kentucky Community and Technical College"
    },
    {
      "institution": "Pat Wilson's Beauty College"
    },
    {
      "institution": "University of Pikeville"
    },
    {
      "institution": "Big Sandy Community and Technical College"
    },
    {
      "institution": "Brown Mackie College-Louisville"
    },
    {
      "institution": "Empire Beauty School-Chenoweth"
    },
    {
      "institution": "Saint Catharine College"
    },
    {
      "institution": "Empire Beauty School-Elizabethtown"
    },
    {
      "institution": "Empire Beauty School-Dixie"
    },
    {
      "institution": "Empire Beauty School-Florence"
    },
    {
      "institution": "Brown Mackie College-Northern Kentucky"
    },
    {
      "institution": "Somerset Community College"
    },
    {
      "institution": "Southeast Kentucky Community and Technical College"
    },
    {
      "institution": "The Southern Baptist Theological Seminary"
    },
    {
      "institution": "Spalding University"
    },
    {
      "institution": "Spencerian College-Louisville"
    },
    {
      "institution": "Sullivan University"
    },
    {
      "institution": "Thomas More College"
    },
    {
      "institution": "Transylvania University"
    },
    {
      "institution": "Trend Setters' Academy of Beauty Culture-Louisville"
    },
    {
      "institution": "Kentucky Community and Technical College System"
    },
    {
      "institution": "Union College"
    },
    {
      "institution": "Western Kentucky University"
    },
    {
      "institution": "Central Louisiana Technical Community College"
    },
    {
      "institution": "American School of Business"
    },
    {
      "institution": "Ayers Career College"
    },
    {
      "institution": "Baton Rouge General Medical Center-School of Nursing"
    },
    {
      "institution": "Baton Rouge General Medical Center-Radiologic Technology"
    },
    {
      "institution": "Baton Rouge School of Computers"
    },
    {
      "institution": "Capital Area Technical College"
    },
    {
      "institution": "Bossier Parish Community College"
    },
    {
      "institution": "Cameron College"
    },
    {
      "institution": "Centenary College of Louisiana"
    },
    {
      "institution": "Cloyd's Beauty School 1 Inc"
    },
    {
      "institution": "Crescent City Bartending School"
    },
    {
      "institution": "D'Jay's School of Beauty Arts and Sciences"
    },
    {
      "institution": "Delgado Community College"
    },
    {
      "institution": "Delta School of Business and Technology"
    },
    {
      "institution": "Northeast Louisiana Technical College"
    },
    {
      "institution": "Demmons School of Beauty"
    },
    {
      "institution": "Denham Springs Beauty School"
    },
    {
      "institution": "Dillard University"
    },
    {
      "institution": "Nunez Community College"
    },
    {
      "institution": "Grambling State University"
    },
    {
      "institution": "Guy's Shreveport Academy of Cosmetology Inc"
    },
    {
      "institution": "ITI Technical College"
    },
    {
      "institution": "John Jay Beauty College"
    },
    {
      "institution": "John Jay Beauty College"
    },
    {
      "institution": "Louisiana State University Health Sciences Center-New Orleans"
    },
    {
      "institution": "Louisiana State University-Alexandria"
    },
    {
      "institution": "Louisiana State University and Agricultural & Mechanical College"
    },
    {
      "institution": "Louisiana State University-Eunice"
    },
    {
      "institution": "Louisiana State University-Shreveport"
    },
    {
      "institution": "Acadiana Technical College-Lafayette Campus"
    },
    {
      "institution": "Aveda Institute-Baton Rouge"
    },
    {
      "institution": "Aveda Institute-Lafayette"
    },
    {
      "institution": "Louisiana Academy of Beauty"
    },
    {
      "institution": "Louisiana College"
    },
    {
      "institution": "Opelousas School of Cosmetology Inc"
    },
    {
      "institution": "Louisiana State University-System Office"
    },
    {
      "institution": "Louisiana Tech University"
    },
    {
      "institution": "Loyola University New Orleans"
    },
    {
      "institution": "McNeese State University"
    },
    {
      "institution": "University of New Orleans"
    },
    {
      "institution": "New Orleans Baptist Theological Seminary"
    },
    {
      "institution": "Nicholls State University"
    },
    {
      "institution": "University of Louisiana at Monroe"
    },
    {
      "institution": "Northwest Louisiana Technical College"
    },
    {
      "institution": "Notre Dame Seminary Graduate School of Theology"
    },
    {
      "institution": "Northwestern State University of Louisiana"
    },
    {
      "institution": "Our Lady of Holy Cross College"
    },
    {
      "institution": "Our Lady of the Lake College"
    },
    {
      "institution": "Pat Goins Benton Road Beauty School"
    },
    {
      "institution": "Pat Goins Monroe Beauty School"
    },
    {
      "institution": "Pat Goins Ruston Beauty School"
    },
    {
      "institution": "Pineville Beauty School"
    },
    {
      "institution": "Aveda Institute-Covington"
    },
    {
      "institution": "Saint Joseph Seminary College"
    },
    {
      "institution": "Vanguard College of Cosmetology-Slidell"
    },
    {
      "institution": "South Louisiana Beauty College"
    },
    {
      "institution": "L E Fletcher Technical Community College"
    },
    {
      "institution": "Remington College-Lafayette Campus"
    },
    {
      "institution": "Southern University-Board and System"
    },
    {
      "institution": "SOWELA Technical Community College"
    },
    {
      "institution": "Stevensons Academy of Hair Design"
    },
    {
      "institution": "Southeastern Louisiana University"
    },
    {
      "institution": "Southern University and A & M College"
    },
    {
      "institution": "Southern University at New Orleans"
    },
    {
      "institution": "Southern University at Shreveport"
    },
    {
      "institution": "University of Louisiana at Lafayette"
    },
    {
      "institution": "Northshore Technical Community College"
    },
    {
      "institution": "Tulane University of Louisiana"
    },
    {
      "institution": "Xavier University of Louisiana"
    },
    {
      "institution": "South Central Louisiana Technical College-Young Memorial Campus"
    },
    {
      "institution": "Kaplan University-Maine Campus"
    },
    {
      "institution": "College of the Atlantic"
    },
    {
      "institution": "Bangor Theological Seminary"
    },
    {
      "institution": "Bates College"
    },
    {
      "institution": "Beal College"
    },
    {
      "institution": "Bowdoin College"
    },
    {
      "institution": "Central Maine Medical Center College of Nursing and Health Professions"
    },
    {
      "institution": "Central Maine Community College"
    },
    {
      "institution": "Colby College"
    },
    {
      "institution": "Eastern Maine Community College"
    },
    {
      "institution": "Husson University"
    },
    {
      "institution": "Kennebec Valley Community College"
    },
    {
      "institution": "The Landing School"
    },
    {
      "institution": "University of Maine at Augusta"
    },
    {
      "institution": "University of Maine at Farmington"
    },
    {
      "institution": "University of Maine at Fort Kent"
    },
    {
      "institution": "University of Maine at Machias"
    },
    {
      "institution": "University of Maine"
    },
    {
      "institution": "University of Maine-System Central Office"
    },
    {
      "institution": "Maine Maritime Academy"
    },
    {
      "institution": "University of Maine at Presque Isle"
    },
    {
      "institution": "University of New England"
    },
    {
      "institution": "Northern Maine Community College"
    },
    {
      "institution": "Empire Beauty School-Maine"
    },
    {
      "institution": "Maine College of Art"
    },
    {
      "institution": "Saint Joseph's College of Maine"
    },
    {
      "institution": "Spa Tech Institute-Westbrook"
    },
    {
      "institution": "Southern Maine Community College"
    },
    {
      "institution": "University of Southern Maine"
    },
    {
      "institution": "Thomas College"
    },
    {
      "institution": "Unity College"
    },
    {
      "institution": "Washington County Community College"
    },
    {
      "institution": "Aaron's Academy of Beauty"
    },
    {
      "institution": "Aesthetics Institute of Cosmetology"
    },
    {
      "institution": "Allegany College of Maryland"
    },
    {
      "institution": "Anne Arundel Community College"
    },
    {
      "institution": "TESST College of Technology-Towson"
    },
    {
      "institution": "Award Beauty School"
    },
    {
      "institution": "Baltimore Studio of Hair Design"
    },
    {
      "institution": "Baltimore City Community College"
    },
    {
      "institution": "University of Baltimore"
    },
    {
      "institution": "Bowie State University"
    },
    {
      "institution": "Capitol College"
    },
    {
      "institution": "Cecil College"
    },
    {
      "institution": "College of Southern Maryland"
    },
    {
      "institution": "Chesapeake College"
    },
    {
      "institution": "Washington Adventist University"
    },
    {
      "institution": "Coppin State University"
    },
    {
      "institution": "Delmarva Beauty Academy"
    },
    {
      "institution": "North American Trade Schools"
    },
    {
      "institution": "Frederick Community College"
    },
    {
      "institution": "Frostburg State University"
    },
    {
      "institution": "Garrett College"
    },
    {
      "institution": "Goucher College"
    },
    {
      "institution": "Kaplan University-Hagerstown Campus"
    },
    {
      "institution": "Hagerstown Community College"
    },
    {
      "institution": "Harford Community College"
    },
    {
      "institution": "Hood College"
    },
    {
      "institution": "Howard Community College"
    },
    {
      "institution": "The Colorlab Academy of Hair"
    },
    {
      "institution": "Johns Hopkins University"
    },
    {
      "institution": "L'Academie de Cuisine"
    },
    {
      "institution": "Lincoln College of Technology-Columbia"
    },
    {
      "institution": "Loyola University Maryland"
    },
    {
      "institution": "Maryland Beauty Academy of Reisterstown"
    },
    {
      "institution": "University of Maryland-University College"
    },
    {
      "institution": "University of Maryland-Baltimore"
    },
    {
      "institution": "University of Maryland-Baltimore County"
    },
    {
      "institution": "University of Maryland-College Park"
    },
    {
      "institution": "Maryland Institute College of Art"
    },
    {
      "institution": "University of Maryland Eastern Shore"
    },
    {
      "institution": "Fortis Institute-Towson"
    },
    {
      "institution": "Montgomery Beauty School"
    },
    {
      "institution": "Montgomery College"
    },
    {
      "institution": "Morgan State University"
    },
    {
      "institution": "Mount St Mary's University"
    },
    {
      "institution": "Ner Israel Rabbinical College"
    },
    {
      "institution": "Hair Academy Inc-New Carrollton"
    },
    {
      "institution": "Notre Dame of Maryland University"
    },
    {
      "institution": "Prince George's Community College"
    },
    {
      "institution": "TESST College of Technology-Baltimore"
    },
    {
      "institution": "Robert Paul Academy of Cosmetology Arts & Sciences"
    },
    {
      "institution": "Maryland Beauty Academy of Essex"
    },
    {
      "institution": "St Mary's Seminary & University"
    },
    {
      "institution": "Salisbury University"
    },
    {
      "institution": "St Mary's College of Maryland"
    },
    {
      "institution": "Sojourner-Douglass College"
    },
    {
      "institution": "St John's College"
    },
    {
      "institution": "TESST College of Technology-Beltsville"
    },
    {
      "institution": "Towson University"
    },
    {
      "institution": "Maryland University of Integrative Health"
    },
    {
      "institution": "International Beauty School"
    },
    {
      "institution": "University System of Maryland"
    },
    {
      "institution": "United States Naval Academy"
    },
    {
      "institution": "Stevenson University"
    },
    {
      "institution": "Washington Bible College-Capital Bible Seminary"
    },
    {
      "institution": "Washington College"
    },
    {
      "institution": "Washington Theological Union"
    },
    {
      "institution": "McDaniel College"
    },
    {
      "institution": "Wor-Wic Community College"
    },
    {
      "institution": "Hult International Business School"
    },
    {
      "institution": "New England College of Business and Finance"
    },
    {
      "institution": "American International College"
    },
    {
      "institution": "Amherst College"
    },
    {
      "institution": "Andover Newton Theological School"
    },
    {
      "institution": "Anna Maria College"
    },
    {
      "institution": "Assabet Valley Regional Technical School"
    },
    {
      "institution": "Assumption College"
    },
    {
      "institution": "Babson College"
    },
    {
      "institution": "Bancroft School of Massage Therapy"
    },
    {
      "institution": "Boston Baptist College"
    },
    {
      "institution": "Bay Path College"
    },
    {
      "institution": "Bay State College"
    },
    {
      "institution": "Bay State School of Technology"
    },
    {
      "institution": "Becker College"
    },
    {
      "institution": "Bentley University"
    },
    {
      "institution": "Berklee College of Music"
    },
    {
      "institution": "Berkshire Community College"
    },
    {
      "institution": "Empire Beauty School-Boston"
    },
    {
      "institution": "Boston Architectural College"
    },
    {
      "institution": "Boston Graduate School of Psychoanalysis Inc"
    },
    {
      "institution": "Boston College"
    },
    {
      "institution": "The Boston Conservatory"
    },
    {
      "institution": "Boston University"
    },
    {
      "institution": "Brandeis University"
    },
    {
      "institution": "Bridgewater State University"
    },
    {
      "institution": "Bristol Community College"
    },
    {
      "institution": "Signature Healthcare Brockton Hospital School of Nursing"
    },
    {
      "institution": "Bunker Hill Community College"
    },
    {
      "institution": "Cambridge College"
    },
    {
      "institution": "Cape Cod Community College"
    },
    {
      "institution": "Catherine Hinds Institute of Esthetics"
    },
    {
      "institution": "Laboure College"
    },
    {
      "institution": "Clark University"
    },
    {
      "institution": "Conway School of Landscape Design"
    },
    {
      "institution": "Curry College"
    },
    {
      "institution": "Lincoln Technical Institute-Somerville"
    },
    {
      "institution": "Dean College"
    },
    {
      "institution": "Diman Regional Technical Institute"
    },
    {
      "institution": "National Aviation Academy of New England"
    },
    {
      "institution": "Eastern Nazarene College"
    },
    {
      "institution": "Emerson College"
    },
    {
      "institution": "Emmanuel College"
    },
    {
      "institution": "Endicott College"
    },
    {
      "institution": "Episcopal Divinity School"
    },
    {
      "institution": "Rob Roy Academy-Fall River"
    },
    {
      "institution": "Fisher College"
    },
    {
      "institution": "Fitchburg State University"
    },
    {
      "institution": "Framingham State University"
    },
    {
      "institution": "Benjamin Franklin Institute of Technology"
    },
    {
      "institution": "Gordon College"
    },
    {
      "institution": "Gordon-Conwell Theological Seminary"
    },
    {
      "institution": "Greenfield Community College"
    },
    {
      "institution": "Hallmark Institute of Photography"
    },
    {
      "institution": "Hampshire College"
    },
    {
      "institution": "Harvard University"
    },
    {
      "institution": "Hebrew College"
    },
    {
      "institution": "Hellenic College-Holy Cross Greek Orthodox School of Theology"
    },
    {
      "institution": "Henris School of Hair Design"
    },
    {
      "institution": "College of the Holy Cross"
    },
    {
      "institution": "Holyoke Community College"
    },
    {
      "institution": "Sanford-Brown College-Boston"
    },
    {
      "institution": "Kay Harvey Academy of Hair Design"
    },
    {
      "institution": "La Baron Hairdressing Academy-Brockton"
    },
    {
      "institution": "La Baron Hairdressing Academy-New Bedford"
    },
    {
      "institution": "Lasell College"
    },
    {
      "institution": "Lawrence Memorial Hospital School of Nursing"
    },
    {
      "institution": "Lesley University"
    },
    {
      "institution": "Longy School of Music of Bard College"
    },
    {
      "institution": "Lowell Academy Hairstyling Institute"
    },
    {
      "institution": "University of Massachusetts-Lowell"
    },
    {
      "institution": "Mansfield Beauty Schools-Springfield"
    },
    {
      "institution": "Mansfield Beauty Schools-Quincy"
    },
    {
      "institution": "Marian Court College"
    },
    {
      "institution": "University of Massachusetts-Amherst"
    },
    {
      "institution": "University of Massachusetts-Boston"
    },
    {
      "institution": "Massachusetts Bay Community College"
    },
    {
      "institution": "MCPHS University"
    },
    {
      "institution": "University of Massachusetts-Central Office"
    },
    {
      "institution": "Massachusetts College of Art and Design"
    },
    {
      "institution": "Massachusetts Institute of Technology"
    },
    {
      "institution": "Massachusetts Maritime Academy"
    },
    {
      "institution": "University of Massachusetts Medical School Worcester"
    },
    {
      "institution": "Massachusetts School of Professional Psychology"
    },
    {
      "institution": "Massachusetts School of Barbering"
    },
    {
      "institution": "Massasoit Community College"
    },
    {
      "institution": "Merrimack College"
    },
    {
      "institution": "MGH Institute of Health Professions"
    },
    {
      "institution": "Middlesex Community College"
    },
    {
      "institution": "Montserrat College of Art"
    },
    {
      "institution": "Mount Holyoke College"
    },
    {
      "institution": "Mount Ida College"
    },
    {
      "institution": "Mount Wachusett Community College"
    },
    {
      "institution": "Cortiva Institute-Boston"
    },
    {
      "institution": "School of the Museum of Fine Arts-Boston"
    },
    {
      "institution": "Everest Institute-Brighton"
    },
    {
      "institution": "Rob Roy Academy-New Bedford"
    },
    {
      "institution": "The New England Conservatory of Music"
    },
    {
      "institution": "New England College of Optometry"
    },
    {
      "institution": "New England School of Acupuncture"
    },
    {
      "institution": "New England School of Law"
    },
    {
      "institution": "New England School of Photography"
    },
    {
      "institution": "Newbury College"
    },
    {
      "institution": "Nichols College"
    },
    {
      "institution": "Massachusetts College of Liberal Arts"
    },
    {
      "institution": "North Bennet Street School"
    },
    {
      "institution": "North Shore Community College"
    },
    {
      "institution": "The New England Institute of Art"
    },
    {
      "institution": "Northeastern University"
    },
    {
      "institution": "Northern Essex Community College"
    },
    {
      "institution": "College of Our Lady of the Elms"
    },
    {
      "institution": "Pine Manor College"
    },
    {
      "institution": "Blessed John XXIII National Seminary"
    },
    {
      "institution": "Quincy College"
    },
    {
      "institution": "Quinsigamond Community College"
    },
    {
      "institution": "Kaplan Career Institute-Charlestown"
    },
    {
      "institution": "Regis College"
    },
    {
      "institution": "Roxbury Community College"
    },
    {
      "institution": "Saint John's Seminary"
    },
    {
      "institution": "Salem State University"
    },
    {
      "institution": "Salter College-West Boylston"
    },
    {
      "institution": "Simmons College"
    },
    {
      "institution": "Bard College at Simon's Rock"
    },
    {
      "institution": "Smith College"
    },
    {
      "institution": "Southeastern Technical Institute"
    },
    {
      "institution": "Springfield College"
    },
    {
      "institution": "Springfield Technical Community College"
    },
    {
      "institution": "University of Massachusetts-Dartmouth"
    },
    {
      "institution": "Stonehill College"
    },
    {
      "institution": "Suffolk University"
    },
    {
      "institution": "Rob Roy Academy-Taunton"
    },
    {
      "institution": "Tufts University"
    },
    {
      "institution": "Wellesley College"
    },
    {
      "institution": "Wentworth Institute of Technology"
    },
    {
      "institution": "Western New England University"
    },
    {
      "institution": "Westfield State University"
    },
    {
      "institution": "Wheaton College"
    },
    {
      "institution": "Wheelock College"
    },
    {
      "institution": "Williams College"
    },
    {
      "institution": "Worcester Polytechnic Institute"
    },
    {
      "institution": "Worcester State University"
    },
    {
      "institution": "Adrian College"
    },
    {
      "institution": "Albion College"
    },
    {
      "institution": "Hillsdale Beauty College"
    },
    {
      "institution": "Northwestern Technological Institute"
    },
    {
      "institution": "Alma College"
    },
    {
      "institution": "Alpena Community College"
    },
    {
      "institution": "Andrews University"
    },
    {
      "institution": "Aquinas College"
    },
    {
      "institution": "Baker College of Owosso"
    },
    {
      "institution": "Baker College of Flint"
    },
    {
      "institution": "Bay de Noc Community College"
    },
    {
      "institution": "Bayshire Academy of Beauty Craft Inc"
    },
    {
      "institution": "Cadillac Institute of Cosmetology"
    },
    {
      "institution": "Calvin College"
    },
    {
      "institution": "Calvin Theological Seminary"
    },
    {
      "institution": "Carnegie Institute"
    },
    {
      "institution": "Michigan School of Professional Psychology"
    },
    {
      "institution": "Central Michigan University"
    },
    {
      "institution": "Mott Community College"
    },
    {
      "institution": "Empire Beauty School-Michigan"
    },
    {
      "institution": "Cleary University"
    },
    {
      "institution": "Concordia University-Ann Arbor"
    },
    {
      "institution": "Cranbrook Academy of Art"
    },
    {
      "institution": "College for Creative Studies"
    },
    {
      "institution": "Davenport University"
    },
    {
      "institution": "David Pressley School of Cosmetology"
    },
    {
      "institution": "Delta College"
    },
    {
      "institution": "Detroit Business Institute-Downriver"
    },
    {
      "institution": "Michigan State University-College of Law"
    },
    {
      "institution": "MIAT College of Technology"
    },
    {
      "institution": "University of Detroit Mercy"
    },
    {
      "institution": "Dorsey Business Schools-Madison Heights"
    },
    {
      "institution": "Dorsey Business Schools-Southgate"
    },
    {
      "institution": "Eastern Michigan University"
    },
    {
      "institution": "Ferris State University"
    },
    {
      "institution": "Flint Institute of Barbering Inc"
    },
    {
      "institution": "Glen Oaks Community College"
    },
    {
      "institution": "Kettering University"
    },
    {
      "institution": "Gogebic Community College"
    },
    {
      "institution": "Grace Bible College"
    },
    {
      "institution": "Cornerstone University"
    },
    {
      "institution": "Everest Institute-Grand Rapids"
    },
    {
      "institution": "Grand Rapids Community College"
    },
    {
      "institution": "Grand Valley State University"
    },
    {
      "institution": "Great Lakes Christian College"
    },
    {
      "institution": "Henry Ford Community College"
    },
    {
      "institution": "Hope College"
    },
    {
      "institution": "ITT Technical Institute-Wyoming"
    },
    {
      "institution": "Jackson College"
    },
    {
      "institution": "Wright Beauty Academy"
    },
    {
      "institution": "Kalamazoo College"
    },
    {
      "institution": "Kalamazoo Valley Community College"
    },
    {
      "institution": "Kellogg Community College"
    },
    {
      "institution": "Kirtland Community College"
    },
    {
      "institution": "Michigan College of Beauty-Monroe"
    },
    {
      "institution": "Lake Michigan College"
    },
    {
      "institution": "Lake Superior State University"
    },
    {
      "institution": "Lansing Community College"
    },
    {
      "institution": "Lawrence Technological University"
    },
    {
      "institution": "M J Murphy Beauty College of Mount Pleasant"
    },
    {
      "institution": "Macomb Community College"
    },
    {
      "institution": "Madonna University"
    },
    {
      "institution": "Marygrove College"
    },
    {
      "institution": "Rochester College"
    },
    {
      "institution": "University of Michigan-Ann Arbor"
    },
    {
      "institution": "Michigan Barber School Inc"
    },
    {
      "institution": "Michigan State University"
    },
    {
      "institution": "Michigan Technological University"
    },
    {
      "institution": "University of Michigan-Dearborn"
    },
    {
      "institution": "University of Michigan-Flint"
    },
    {
      "institution": "Mid Michigan Community College"
    },
    {
      "institution": "Monroe County Community College"
    },
    {
      "institution": "Montcalm Community College"
    },
    {
      "institution": "Mr Bela's School of Cosmetology Inc"
    },
    {
      "institution": "Baker College of Muskegon"
    },
    {
      "institution": "Muskegon Community College"
    },
    {
      "institution": "Everest College-Skokie"
    },
    {
      "institution": "Everest Institute-Southfield"
    },
    {
      "institution": "North Central Michigan College"
    },
    {
      "institution": "Northern Michigan University"
    },
    {
      "institution": "Paul Mitchell the School-Escanaba"
    },
    {
      "institution": "Northwestern Michigan College"
    },
    {
      "institution": "Northwood University-Michigan"
    },
    {
      "institution": "Oakland Community College"
    },
    {
      "institution": "Oakland University"
    },
    {
      "institution": "Olivet College"
    },
    {
      "institution": "Port Huron Cosmetology College"
    },
    {
      "institution": "Kuyper College"
    },
    {
      "institution": "Ross Medical Education Center-Lansing"
    },
    {
      "institution": "Ross Medical Education Center-Madison Heights"
    },
    {
      "institution": "Ross Medical Education Center-Flint"
    },
    {
      "institution": "Sacred Heart Major Seminary"
    },
    {
      "institution": "Saginaw Valley State University"
    },
    {
      "institution": "Schoolcraft College"
    },
    {
      "institution": "Siena Heights University"
    },
    {
      "institution": "St Clair County Community College"
    },
    {
      "institution": "Southwestern Michigan College"
    },
    {
      "institution": "Specs Howard School of Media Arts"
    },
    {
      "institution": "Spring Arbor University"
    },
    {
      "institution": "Michigan Career and Technical Institute"
    },
    {
      "institution": "Finlandia University"
    },
    {
      "institution": "Thomas M Cooley Law Schoo"
    },
    {
      "institution": "Twin City Beauty College"
    },
    {
      "institution": "Walsh College of Accountancy and Business Administration"
    },
    {
      "institution": "Washtenaw Community College"
    },
    {
      "institution": "Wayne County Community College District"
    },
    {
      "institution": "Wayne State University"
    },
    {
      "institution": "West Shore Community College"
    },
    {
      "institution": "Western Michigan University"
    },
    {
      "institution": "Western Theological Seminary"
    },
    {
      "institution": "Wright Beauty Academy"
    },
    {
      "institution": "Academy College"
    },
    {
      "institution": "Alexandria Technical & Community College"
    },
    {
      "institution": "American Indian OIC Inc"
    },
    {
      "institution": "Anoka Technical College"
    },
    {
      "institution": "Anoka-Ramsey Community College"
    },
    {
      "institution": "Apostolic Bible Institute Inc"
    },
    {
      "institution": "Augsburg College"
    },
    {
      "institution": "Riverland Community College"
    },
    {
      "institution": "Northwest Technical College"
    },
    {
      "institution": "Bemidji State University"
    },
    {
      "institution": "Bethany Lutheran College"
    },
    {
      "institution": "Bethel University"
    },
    {
      "institution": "Bethel Seminary-St Paul"
    },
    {
      "institution": "Central Lakes College-Brainerd"
    },
    {
        "institution": "Stevens Institute of Technology"
    }
  ]`

const schoolObject = JSON.parse(schools);
export default schoolObject;