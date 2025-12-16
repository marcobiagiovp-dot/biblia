import type { BibleBook } from './types';

export const BIBLE_BOOKS: BibleBook[] = [
  { name: 'Genesis', chapters: 50 },
  { name: 'Exodus', chapters: 40 },
  { name: 'Leviticus', chapters: 27 },
  { name: 'Numbers', chapters: 36 },
  { name: 'Deuteronomy', chapters: 34 },
  { name: 'Joshua', chapters: 24 },
  { name: 'Judges', chapters: 21 },
  { name: 'Ruth', chapters: 4 },
  { name: '1 Samuel', chapters: 31 },
  { name: '2 Samuel', chapters: 24 },
  { name: '1 Kings', chapters: 22 },
  { name: '2 Kings', chapters: 25 },
  { name: '1 Chronicles', chapters: 29 },
  { name: '2 Chronicles', chapters: 36 },
  { name: 'Ezra', chapters: 10 },
  { name: 'Nehemiah', chapters: 13 },
  { name: 'Esther', chapters: 10 },
  { name: 'Job', chapters: 42 },
  { name: 'Psalms', chapters: 150 },
  { name: 'Proverbs', chapters: 31 },
  { name: 'Ecclesiastes', chapters: 12 },
  { name: 'Song of Solomon', chapters: 8 },
  { name: 'Isaiah', chapters: 66 },
  { name: 'Jeremiah', chapters: 52 },
  { name: 'Lamentations', chapters: 5 },
  { name: 'Ezekiel', chapters: 48 },
  { name: 'Daniel', chapters: 12 },
  { name: 'Hosea', chapters: 14 },
  { name: 'Joel', chapters: 3 },
  { name: 'Amos', chapters: 9 },
  { name: 'Obadiah', chapters: 1 },
  { name: 'Jonah', chapters: 4 },
  { name: 'Micah', chapters: 7 },
  { name: 'Nahum', chapters: 3 },
  { name: 'Habakkuk', chapters: 3 },
  { name: 'Zephaniah', chapters: 3 },
  { name: 'Haggai', chapters: 2 },
  { name: 'Zechariah', chapters: 14 },
  { name: 'Malachi', chapters: 4 },
  { name: 'Matthew', chapters: 28 },
  { name: 'Mark', chapters: 16 },
  { name: 'Luke', chapters: 24 },
  { name: 'John', chapters: 21 },
  { name: 'Acts', chapters: 28 },
  { name: 'Romans', chapters: 16 },
  { name: '1 Corinthians', chapters: 16 },
  { name: '2 Corinthians', chapters: 13 },
  { name: 'Galatians', chapters: 6 },
  { name: 'Ephesians', chapters: 6 },
  { name: 'Philippians', chapters: 4 },
  { name: 'Colossians', chapters: 4 },
  { name: '1 Thessalonians', chapters: 5 },
  { name: '2 Thessalonians', chapters: 3 },
  { name: '1 Timothy', chapters: 6 },
  { name: '2 Timothy', chapters: 4 },
  { name: 'Titus', chapters: 3 },
  { name: 'Philemon', chapters: 1 },
  { name: 'Hebrews', chapters: 13 },
  { name: 'James', chapters: 5 },
  { name: '1 Peter', chapters: 5 },
  { name: '2 Peter', chapters: 3 },
  { name: '1 John', chapters: 5 },
  { name: '2 John', chapters: 1 },
  { name: '3 John', chapters: 1 },
  { name: 'Jude', chapters: 1 },
  { name: 'Revelation', chapters: 22 },
];

export const FONT_SIZES: string[] = [
  'text-sm',    // Small
  'text-base',  // Normal
  'text-lg',    // Large
  'text-xl',    // Extra Large
  'text-2xl',   // 2X Large
  'text-3xl',   // 3X Large
];

export const CHAPTER_TITLES: Record<string, string[]> = {
  'Genesis': [
    "The Creation", "The Garden of Eden", "The Fall of Man", "Cain and Abel", "The Descendants of Adam", "Noah and the Ark", "The Great Flood", "God's Covenant with Noah", "The Table of Nations", "The Tower of Babel", "The Call of Abram", "Abram in Egypt", "Abram and Lot Separate", "God's Covenant with Abram", "Hagar and Ishmael", "The Covenant of Circumcision", "The Three Visitors", "Sodom and Gomorrah Destroyed", "Abraham and Abimelech", "The Birth of Isaac", "Abraham's Test", "The Death of Sarah", "Isaac and Rebekah", "The Death of Abraham", "Jacob and Esau", "Isaac and Abimelech", "Jacob's Deception", "Jacob's Dream at Bethel", "Jacob Marries Leah and Rachel", "Jacob's Children", "Jacob's Agreement with Laban", "Jacob Flees from Laban", "Jacob Wrestles with God", "Jacob Meets Esau", "The Defiling of Dinah", "Jacob Returns to Bethel", "The Descendants of Esau", "Joseph's Dreams", "Joseph Sold by His Brothers", "Judah and Tamar", "Joseph and Potiphar's Wife", "The Dreams of Two Prisoners", "Joseph Interprets Pharaoh's Dreams", "Joseph's Rise to Power", "Joseph's Brothers in Egypt", "The Second Journey to Egypt", "A Silver Cup in a Sack", "Judah's Plea for Benjamin", "Joseph Reveals His Identity", "Jacob's Family Moves to Egypt", "Jacob Blesses Joseph's Sons", "Jacob's Last Words to His Sons", "The Deaths of Jacob and Joseph"
  ],
  'Exodus': [
    "The Israelites Oppressed", "The Birth of Moses", "Moses and the Burning Bush", "Moses Returns to Egypt", "Bricks Without Straw", "God's Promise to Israel", "The Ten Plagues", "The First Nine Plagues", "The Tenth Plague and the Passover", "The Exodus", "Crossing the Red Sea", "The Song of Moses and Miriam", "The Waters of Marah and Elim", "Manna and Quail", "Water from the Rock", "The Battle with the Amalekites", "Jethro's Advice", "The Ten Commandments", "The People's Response", "Laws for the People", "God's Covenant with Israel", "The Golden Calf", "Moses Intercedes for Israel", "The New Tablets of Stone", "The Lord Proclaims His Name", "The Sabbath and the Festivals", "Building the Tabernacle", "The Ark, Table, and Lampstand", "The Tabernacle Curtains", "The Bronze Altar", "The Courtyard", "The Priestly Garments", "The Ordination of the Priests", "The Anointing Oil and Incense", "Bezalel and Oholiab", "The Sabbath and the Offerings", "The Tabernacle Erected", "The Priests' Consecration", "The Glory of the Lord"
  ],
  'Leviticus': [
    "The Burnt Offering", "The Grain Offering", "The Peace Offering", "The Sin Offering", "The Guilt Offering", "Instructions for the Priests", "The Ordination of Aaron and His Sons", "Nadab and Abihu", "Clean and Unclean Animals", "Purification After Childbirth", "Laws About Skin Diseases", "Laws About Mildew", "Laws About Bodily Discharges", "The Day of Atonement", "Laws About Eating Blood", "Laws About Sexual Immorality", "Laws of Holiness", "Punishments for Disobedience", "Laws for Priests", "The Appointed Festivals", "The Lamp and the Bread of the Tabernacle", "The Year of Jubilee", "Blessings for Obedience", "Curses for Disobedience", "Laws About Vows"
  ],
  'Numbers': [
    "The Census of the Tribes", "The Arrangement of the Camp", "The Duties of the Levites", "The Cleansing of the Camp", "The Test for an Unfaithful Wife", "The Nazirite Vow", "The Offerings of the Leaders", "The Setting Up of the Lamps", "The Consecration of the Levites", "The Passover", "The Cloud and the Fire", "The March from Sinai", "The People Complain", "The Seventy Elders", "Miriam and Aaron Oppose Moses", "The Spies Explore Canaan", "The People Rebel", "Supplementary Offerings", "The Sabbath-Breaker Executed", "Korah's Rebellion", "The Budding of Aaron's Staff", "The Duties of Priests and Levites", "The Water of Purification", "The Death of Miriam", "Moses Strikes the Rock", "The Death of Aaron", "The Bronze Serpent", "The Journey to Moab", "Balaam and the Donkey", "Balaam's Oracles", "Balaam's Final Prophecies", "The Sin of Peor", "The Second Census", "The Inheritance of Daughters", "Joshua to Succeed Moses", "Daily Offerings", "The Appointed Festivals", "Laws Concerning Vows", "The War with Midian", "The Division of the Land", "The Cities of Refuge", "The Inheritance of the Daughters of Zelophehad"
  ],
  'Deuteronomy': [
    "The Command to Leave Horeb", "The Appointment of Leaders", "The Spies' Report", "The Rebellion of the People", "Forty Years of Wandering", "The Conquest of Sihon", "The Conquest of Og", "The Division of the Land", "Moses' Plea to Enter Canaan", "The Ten Commandments", "Love the Lord Your God", "The Great Commandment", "Driving Out the Nations", "The Dangers of Idolatry", "A Chosen People", "Remember the Lord", "The Blessings of Obedience", "The Consequences of Disobedience", "The Lord's Goodness to Israel", "The Two Tablets of Stone", "The Golden Calf", "The Chosen Place of Worship", "Laws Against Pagan Worship", "Clean and Unclean Food", "The Year for Canceling Debts", "The Passover and the Festivals", "Judges and Justice", "Laws Concerning Kings", "Offerings for Priests and Levites", "Prophets and Divination", "Cities of Refuge", "Laws of Warfare", "Various Laws", "The Law of Divorce", "Firstfruits and Tithes", "The Covenant Renewal", "The Altar on Mount Ebal", "Curses from Mount Ebal", "Blessings for Obedience", "Curses for Disobedience", "The Covenant Renewed in Moab", "The Choice of Life or Death", "Joshua to Succeed Moses", "The Song of Moses", "Moses Blesses the Tribes", "The Death of Moses"
  ],
  'Joshua': [
    "God Commissions Joshua", "Rahab and the Spies", "Crossing the Jordan", "The Memorial Stones", "Circumcision at Gilgal", "The Fall of Jericho", "Achan's Sin", "The Conquest of Ai", "The Covenant Renewed at Mount Ebal", "The Gibeonite Deception", "The Sun Stands Still", "The Conquest of the Southern Cities", "The Conquest of the Northern Kings", "The Land Yet to Be Conquered", "The Inheritance of the Eastern Tribes", "The Inheritance of the Western Tribes", "The Allotment for Caleb", "The Allotment for Judah", "The Allotment for Ephraim and Manasseh", "The Allotment of the Remaining Land", "The Cities of Refuge", "The Towns for the Levites", "The Eastern Tribes Return Home", "Joshua's Farewell Address", "The Covenant Renewal at Shechem"
  ],
  'Judges': [
    "The Conquest of Canaan", "The Disobedience of the Israelites", "Othniel", "Ehud", "Deborah", "Gideon and the Fleece", "Gideon's Three Hundred Men", "Gideon Defeats the Midianites", "Abimelech's Conspiracy", "Jephthah", "Jephthah's Vow", "Samson's Birth", "Samson's Marriage", "Samson's Vengeance on the Philistines", "Samson and Delilah", "Micah's Idols", "The Danites' Idolatry", "A Levite and His Concubine", "The Gibeah Outrage", "The War with Benjamin", "Wives for the Benjamites"
  ],
  'Ruth': [
    "Naomi and Ruth", "Ruth Meets Boaz", "Ruth and Boaz at the Threshing Floor", "Boaz Marries Ruth"
  ],
  '1 Samuel': [
    "The Birth of Samuel", "Hannah's Prayer", "Eli's Wicked Sons", "The Lord Calls Samuel", "The Philistines Capture the Ark", "The Ark in Ashdod and Ekron", "The Ark Returned to Israel", "Samuel Subdues the Philistines", "Israel Asks for a King", "Saul Chosen as King", "Saul's First Victory", "Samuel's Farewell Address", "Saul's Unlawful Sacrifice", "Jonathan's Victory Over the Philistines", "Saul's Rash Vow", "The Lord Rejects Saul as King", "David Anointed King", "David and Goliath", "David and Jonathan's Friendship", "Saul's Jealousy of David", "David Flees from Saul", "David at Nob and Gath", "David at Keilah", "David Spares Saul's Life", "The Death of Samuel", "David, Nabal, and Abigail", "David Spares Saul's Life Again", "David with the Philistines", "Saul and the Witch of Endor", "The Philistines Reject David", "David Destroys the Amalekites", "The Death of Saul"
  ],
  '2 Samuel': [
    "David Learns of Saul's Death", "David Anointed King Over Judah", "The War Between the Houses of David and Saul", "Abner Joins David", "Joab Murders Abner", "Ish-Bosheth Murdered", "David Anointed King Over All Israel", "David Conquers Jerusalem", "David's Victories", "David and Mephibosheth", "David and Bathsheba", "Nathan Rebukes David", "The Birth of Solomon", "Amnon and Tamar", "Absalom's Rebellion", "David Flees Jerusalem", "David and Ziba", "Shimei Curses David", "Absalom in Jerusalem", "The Defeat of Absalom", "David's Mourning for Absalom", "David Returns to Jerusalem", "Sheba's Rebellion", "The Gibeonites Avenged", "David's Song of Praise", "David's Last Words", "The Census"
  ],
  '1 Kings': [
    "Adonijah Sets Himself Up as King", "David's Charge to Solomon", "Solomon's Reign Established", "Solomon's Wisdom", "Solomon's Preparations for the Temple", "Solomon Builds the Temple", "Solomon Builds His Palace", "The Ark Brought to the Temple", "Solomon's Dedication of the Temple", "The Lord Appears to Solomon", "Solomon's Other Activities", "The Queen of Sheba Visits Solomon", "Solomon's Apostasy", "Jeroboam's Rebellion", "The Kingdom Divided", "Jeroboam's Idolatry", "The Man of God from Judah", "The Reign of Rehoboam", "The Reign of Abijam", "The Reign of Asa", "The Reign of Nadab and Baasha", "The Reigns of Elah, Zimri, and Omri", "Ahab and Elijah", "Elijah and the Prophets of Baal", "Elijah Flees to Horeb", "The Call of Elisha", "Ahab's Wars with Syria", "Naboth's Vineyard"
  ],
  '2 Kings': [
    "Ahab's Death", "The Reign of Ahaziah", "Elijah Taken Up to Heaven", "Elisha Succeeds Elijah", "Moab Revolts", "The Widow's Olive Oil", "The Shunammite's Son Restored to Life", "Naaman Healed of Leprosy", "The Axe Head That Floated", "Elisha and the Arameans", "The Siege of Samaria", "The Aramean Camp Deserted", "Jehu Anointed King of Israel", "Jehu Kills Joram and Ahaziah", "Jehu Kills the Family of Ahab", "Jehu Kills the Priests of Baal", "Athaliah and Joash", "Joash Repairs the Temple", "The Reign of Jehoahaz", "The Reign of Jehoash", "The Reign of Amaziah", "The Reign of Jeroboam II", "The Reign of Azariah", "The Reigns of Zechariah, Shallum, Menahem, Pekahiah, and Pekah", "The Reign of Jotham", "The Reign of Ahaz", "Hezekiah King of Judah", "Sennacherib Invades Judah", "Hezekiah's Illness", "The Reign of Manasseh", "The Reign of Amon", "Josiah's Reforms", "The Book of the Law Found", "The Fall of Jerusalem", "The Captivity of Judah"
  ],
  '1 Chronicles': [
    "From Adam to Abraham", "The Descendants of Abraham", "The Descendants of Jacob", "The Descendants of Judah", "The Descendants of David", "The Descendants of Solomon", "The Descendants of the Tribes of Israel", "The Inhabitants of Jerusalem", "The Genealogy of Saul", "The Death of Saul", "David Becomes King", "The Capture of Jerusalem", "The Ark Brought to Jerusalem", "David's Victories", "God's Covenant with David", "David's Prayer", "David's Further Victories", "The Battle Against the Ammonites", "The Capture of Rabbah", "The Census", "David Prepares for the Temple", "The Duties of the Levites", "The Divisions of the Priests", "The Musicians", "The Gatekeepers and Treasurers", "The Military Divisions", "David's Charge to Solomon", "Offerings for the Temple", "David's Death"
  ],
  '2 Chronicles': [
    "Solomon Asks for Wisdom", "Solomon's Wealth", "Solomon Builds the Temple", "The Furnishings of the Temple", "The Ark Brought to the Temple", "Solomon's Prayer of Dedication", "The Dedication of the Temple", "The Lord Appears to Solomon", "Solomon's Other Achievements", "The Queen of Sheba's Visit", "Rehoboam's Folly", "Shishak Attacks Jerusalem", "The Reign of Abijah", "The Reign of Asa", "Asa's Reform", "The End of Asa's Reign", "The Reign of Jehoshaphat", "Micaiah Prophesies Against Ahab", "Jehoshaphat's Reforms", "Jehoshaphat Defeats Moab and Ammon", "The Reign of Jehoram", "The Reign of Ahaziah", "Athaliah and Joash", "Joash Repairs the Temple", "The Apostasy of Joash", "The Reign of Amaziah", "The Reign of Uzziah", "The Reign of Jotham", "The Reign of Ahaz", "The Reign of Hezekiah", "Hezekiah Purifies the Temple", "Hezekiah Celebrates the Passover", "Sennacherib's Invasion", "Hezekiah's Pride and Achievements", "The Reign of Manasseh", "The Reign of Amon", "The Reign of Josiah", "The Discovery of the Book of the Law", "The Fall of Jerusalem"
  ],
  'Ezra': [
    "The Return from Exile", "The List of Returned Exiles", "Rebuilding the Altar", "Rebuilding the Temple", "Opposition to the Rebuilding", "The Letter to King Artaxerxes", "The Decree of Darius", "The Completion and Dedication of the Temple", "Ezra's Journey to Jerusalem", "Ezra's Prayer About Intermarriage", "The People's Confession of Sin"
  ],
  'Nehemiah': [
    "Nehemiah's Prayer", "Nehemiah Sent to Jerusalem", "Nehemiah Inspects Jerusalem's Walls", "The Builders of the Wall", "Opposition to the Rebuilding", "Nehemiah Helps the Poor", "Further Opposition to the Rebuilding", "The Wall Is Completed", "Ezra Reads the Law", "The People Confess Their Sins", "The Agreement of the People", "The New Residents of Jerusalem", "The Dedication of the Wall"
  ],
  'Esther': [
    "Queen Vashti Deposed", "Esther Chosen as Queen", "Mordecai Uncovers a Conspiracy", "Haman's Plot Against the Jews", "Mordecai Persuades Esther to Help", "Esther's Banquet", "Haman's Humiliation", "Esther Reveals Haman's Plot", "The King's Edict in Favor of the Jews", "The Triumph of the Jews", "The Feast of Purim"
  ],
  'Job': [
    "Job's Character and Wealth", "Satan's First Attack", "Satan's Second Attack", "Job's Three Friends", "Job Curses the Day of His Birth", "Eliphaz's First Speech", "Job's Reply to Eliphaz", "Bildad's First Speech", "Job's Reply to Bildad", "Zophar's First Speech", "Job's Reply to Zophar", "Job Affirms His Innocence", "Job's Complaint to God", "Eliphaz's Second Speech", "Job's Reply to Eliphaz", "Bildad's Second Speech", "Job's Reply to Bildad", "Zophar's Second Speech", "Job's Reply to Zophar", "Job's Final Defense", "The Wickedness of Man", "Job's Final Protest of Innocence", "Elihu's Speeches", "Elihu Proclaims God's Justice", "Elihu Exalts God's Greatness", "The Lord Speaks", "Job's Humility and Repentance", "The Lord Rebukes Job's Friends", "Job's Restoration"
  ],
  'Psalms': [
    "The Two Ways", "The Reign of the Lord's Anointed", "A Prayer for Deliverance", "A Prayer for Protection", "A Morning Prayer", "A Prayer for Mercy", "A Prayer for Justice", "The Glory of God in Creation", "A Prayer for Guidance", "A Prayer Against the Wicked", "The Lord as a Refuge", "A Cry for Help", "A Prayer of Trust", "The Folly of the Wicked", "The Guest of the Lord", "A Prayer for Deliverance", "A Prayer for Protection", "The Heavens Declare the Glory of God", "A Royal Psalm", "A Prayer in Time of Trouble", "A Thanksgiving for Victory", "A Cry of Anguish", "The Lord Is My Shepherd", "A Psalm of David", "A Prayer for Guidance and Protection", "A Declaration of Integrity", "The Lord Is My Light and My Salvation", "A Prayer for Help", "Ascribe to the Lord Glory", "A Psalm of Thanksgiving", "A Prayer for Deliverance", "The Goodness of the Lord", "A Song of a Penitent", "A Prayer for Protection", "The Righteous and the Wicked", "A Prayer of a Troubled Man", "The Brevity of Life", "A Prayer for Deliverance", "The Lord's Care for the Poor", "A Cry of Distress", "The Thirst of the Soul for God", "A Prayer in Exile", "A Royal Wedding Song", "God Is Our Refuge", "The Majesty of God", "A Song of Zion", "The Folly of Trust in Riches", "The Judgment of God", "A Prayer for Cleansing", "The Wickedness of the Deceitful", "A Lament", "A Prayer for God's Presence", "A Prayer Against the Wicked", "A Prayer for Deliverance", "A Thanksgiving for God's Mighty Deeds", "A Lament Over the Destruction of Jerusalem", "A Prayer for Restoration", "A Plea for Help", "A Royal Psalm", "A Song of Trust", "A Call to Praise", "The Steadfast Love of God", "A Prayer for Deliverance", "A Prayer for Protection", "A Prayer in Old Age", "A Prayer for the King", "The Prosperity of the Wicked", "A Lament Over the Destruction of the Sanctuary", "A Song of Thanksgiving", "A Prayer of a Distressed Nation", "A Prayer for Restoration", "A Plea for God's Blessing", "A Song of Praise", "The Greatness of the Lord", "A Call to Repentance", "The Majesty of God", "A Song of Trust", "A Call to Worship", "A Song of Praise", "The Lord Reigns", "A Call to Praise the Lord", "The Lord's Eternal Reign", "A Prayer for Guidance", "A Song of Thanksgiving", "A Prayer for Deliverance", "A Prayer for Protection", "The Joy of Forgiveness", "The Lord's Goodness to Israel", "A Lament Over Zion", "A Prayer for Deliverance", "The Excellency of the Law of the Lord", "A Prayer for Protection", "The Joy of Worship", "A Prayer for the Peace of Jerusalem", "A Prayer for Help", "A Song of Trust", "A Thanksgiving for Deliverance", "A Prayer Against the Wicked", "A Song of Zion", "A Prayer for Deliverance", "The Lord's Goodness", "A Prayer for the Lord's Presence", "A Song of Ascents", "The Lord's Goodness to Israel", "A Lament Over the Exile", "A Prayer for Forgiveness", "A Prayer for Guidance", "A Prayer of David", "A Prayer for Protection", "A Song of Praise", "A Prayer for Deliverance", "A Call to Praise the Lord", "Hallelujah! Praise the Lord"
  ],
  'Proverbs': [
    "The Beginning of Knowledge", "The Value of Wisdom", "Trusting in the Lord", "The Blessings of Wisdom", "Warning Against Adultery", "Warnings Against Folly", "The Seven Abominations", "The Call of Wisdom", "Wisdom's Feast", "The Proverbs of Solomon", "The Righteous and the Wicked", "The Words of the Wise", "The Folly of Fools", "The House of the Wise", "A Gentle Answer", "The Lord's Scrutiny", "A Cheerful Heart", "The Power of the Tongue", "The Just Weight", "The King's Heart", "A Good Name", "The Rich and the Poor", "The Thirty Sayings of the Wise", "Warnings and Instructions", "More Proverbs of Solomon", "The Righteous and the Wicked", "The Folly of a Fool", "The Sluggard", "The Gossiper", "The Words of Agur", "The Virtuous Woman"
  ],
  'Ecclesiastes': [
    "Everything Is Meaningless", "The Vanity of Pleasure", "A Time for Everything", "The Vanity of Toil", "The Vanity of Riches", "The Vanity of Life", "Wisdom and Folly", "The Limits of Human Wisdom", "The Mystery of Life", "The Value of Wisdom", "Cast Your Bread Upon the Waters", "Remember Your Creator in Your Youth"
  ],
  'Song of Solomon': [
    "The Bride's Adoration", "The Voice of the Beloved", "The Bride's Dream", "The Bride's Beauty", "The Bride's Love for the Groom", "The Bride's Invitation", "The Bride's Reminiscence", "The Power of Love"
  ],
  'Isaiah': [
    "A Rebellious Nation", "The Mountain of the Lord", "The Judgment on Judah and Jerusalem", "The Branch of the Lord", "The Song of the Vineyard", "Isaiah's Commission", "The Sign of Immanuel", "The Judgment on Israel and Judah", "The Coming of the Messiah", "The Judgment on Assyria", "The Branch from Jesse", "A Song of Praise", "The Prophecy Against Babylon", "The Prophecy Against Assyria", "The Prophecy Against Philistia", "The Prophecy Against Moab", "The Prophecy Against Damascus", "The Prophecy Against Cush", "The Prophecy Against Egypt", "The Prophecy Against Babylon, Edom, and Arabia", "The Prophecy Against Jerusalem", "The Prophecy Against Tyre", "The Judgment of the Earth", "A Song of Praise", "A Prayer for Deliverance", "A Song of Trust", "The Judgment on Ephraim", "The Cornerstone of Zion", "The Woe to the Obstinate Nation", "The Woe to the Rebellious Children", "The Helper from Egypt", "The Judgment on Assyria", "The King of Righteousness", "The Women of Jerusalem", "The Glorious Future of Zion", "Hezekiah's Prayer", "Hezekiah's Illness and Recovery", "The Envoys from Babylon", "A Message of Comfort", "The Greatness of God", "The Servant of the Lord", "Israel's Blindness", "The Fall of Babylon's Idols", "The Servant, the Light to the Nations", "The Lord's Chosen Servant", "A Song of Praise", "The Suffering and Glory of the Servant", "The Future Glory of Zion", "The Invitation to the Thirsty", "The Covenant of Peace", "The Wicked and the Righteous", "The True Fast", "The Reward of the Righteous", "The New Heavens and the New Earth"
  ],
  'Jeremiah': [
    "The Call of Jeremiah", "Israel's Apostasy", "The Coming Judgment", "A Call to Repentance", "The Siege of Jerusalem Foretold", "The Worthlessness of Israel's Worship", "The Valley of Slaughter", "The Broken Potter's Flask", "Jeremiah's Complaint", "The Lord's Judgment on the Nations", "The Covenant with David", "The Sign of the Linen Loincloth", "The Drought, Famine, and Sword", "The Lord's Rejection of Israel", "Jeremiah's Prayer for His People", "The Potter and the Clay", "The Plot Against Jeremiah", "The Broken Jar", "Jeremiah and Pashhur", "The Message to Zedekiah", "The Worthless Shepherds", "The Righteous Branch", "The False Prophets", "The Two Baskets of Figs", "The Seventy Years of Captivity", "The Cup of God's Wrath", "Jeremiah's Trial", "The Letter to the Exiles", "The Promise of Restoration", "The New Covenant", "The Purchase of a Field", "The Lord's Unfailing Love", "The Siege of Jerusalem", "The Word of the Lord to the Rechabites", "Jehoiakim Burns the Scroll", "The Fall of Jerusalem", "Jeremiah's Release", "The Flight to Egypt", "The Word of the Lord to the Jews in Egypt", "The Prophecy Against Baruch", "The Prophecy Against Egypt", "The Prophecy Against the Philistines", "The Prophecy Against Moab", "The Prophecy Against Ammon", "The Prophecy Against Edom", "The Prophecy Against Damascus", "The Prophecy Against Kedar and Hazor", "The Prophecy Against Elam", "The Prophecy Against Babylon"
  ],
  'Lamentations': [
    "The Sorrows of Zion", "The Lord's Anger Against Zion", "The Suffering of the Prophet", "The Desolation of Zion", "A Prayer for Restoration"
  ],
  'Ezekiel': [
    "Ezekiel's Vision of God", "Ezekiel's Call to Be a Prophet", "The Siege of Jerusalem Symbolized", "The Iniquity of Israel and Judah", "The Judgment on Jerusalem", "The Idolatry in the Temple", "The Slaughter of the Idolaters", "The Glory of the Lord Departs from the Temple", "The Exiles in Babylon", "The Sins of the Elders", "The Parable of the Vine", "The Parable of the Unfaithful Wife", "The Two Eagles and the Vine", "The Soul Who Sins Shall Die", "The Parable of the Lion Cubs", "The History of Israel's Rebellion", "The Sword of the Lord", "The Sins of Jerusalem", "The Parable of the Two Sisters", "The Parable of the Boiling Pot", "The Death of Ezekiel's Wife", "The Prophecy Against Ammon", "The Prophecy Against Tyre", "The Prophecy Against the King of Tyre", "The Prophecy Against Sidon", "The Prophecy Against Egypt", "The Watchman and His Message", "The Shepherds and the Sheep", "The Prophecy Against Mount Seir", "The Restoration of Israel", "The Valley of Dry Bones", "The Prophecy Against Gog", "The Vision of the New Temple", "The Laws of the New Temple", "The Prince, the Levites, and the Priests", "The Division of the Land", "The River Flowing from the Temple", "The Boundaries of the Land", "The Gates of the New City"
  ],
  'Daniel': [
    "Daniel's Training in Babylon", "Nebuchadnezzar's Dream", "The Fiery Furnace", "Nebuchadnezzar's Humiliation", "Belshazzar's Feast", "Daniel in the Den of Lions", "Daniel's Vision of the Four Beasts", "Daniel's Vision of the Ram and the Goat", "Daniel's Prayer for His People", "The Vision of the Seventy Weeks", "The Vision of the Man Clothed in Linen", "The Kings of the South and the North", "The Time of the End"
  ],
  'Hosea': [
    "Hosea's Wife and Children", "Israel's Unfaithfulness", "The Restoration of Israel", "The Charge Against Israel", "The Judgment on Israel and Judah", "The Lord's Anger Against Israel", "Israel's Corruption", "The Lord's Judgment on Ephraim", "The Punishment of Israel's Sin", "Israel's Calf-Idol", "The Lord's Love for Israel", "The Guilt of Ephraim", "A Call to Repentance"
  ],
  'Joel': [
    "The Plague of Locusts", "A Call to Repentance", "The Day of the Lord"
  ],
  'Amos': [
    "The Judgment on the Nations", "The Judgment on Israel", "A Call to Repentance", "The Woes to the Complacent", "The Visions of Amos", "The Lord's Judgment on Israel", "The Restoration of David's Kingdom"
  ],
  'Obadiah': [
    "The Judgment on Edom"
  ],
  'Jonah': [
    "Jonah's Flight from the Lord", "Jonah's Prayer", "Jonah's Preaching in Nineveh", "Jonah's Anger at the Lord's Mercy"
  ],
  'Micah': [
    "The Judgment on Samaria and Jerusalem", "The Coming Judgment and Restoration", "The Corrupt Leaders", "The Mountain of the Lord", "The Coming Ruler from Bethlehem", "The Lord's Case Against Israel", "The Lord's Requirements"
  ],
  'Nahum': [
    "The Lord's Anger Against Nineveh", "The Destruction of Nineveh", "The Ruin of Nineveh"
  ],
  'Habakkuk': [
    "Habakkuk's Complaint", "The Lord's Answer", "Habakkuk's Prayer"
  ],
  'Zephaniah': [
    "The Coming Judgment", "A Call to Repentance", "The Promise of Restoration"
  ],
  'Haggai': [
    "The Command to Rebuild the Temple", "The Glory of the New Temple"
  ],
  'Zechariah': [
    "A Call to Return to the Lord", "The Vision of the Horses", "The Vision of the Horns and Craftsmen", "The Vision of the Surveyor", "The Cleansing of the High Priest", "The Vision of the Lampstand and Olive Trees", "The Vision of the Flying Scroll", "The Vision of the Woman in a Basket", "The Vision of the Four Chariots", "The Crown for Joshua", "The Call to Justice and Mercy", "The Restoration of Israel", "The Coming of the King", "The Shepherds", "The Deliverance of Jerusalem", "The Mourning for the Pierced One", "The Cleansing from Sin", "The Shepherd Struck", "The Lord's Coming and Reign"
  ],
  'Malachi': [
    "The Lord's Love for Israel", "The Polluted Offerings", "The Covenant with Levi", "The Coming Messenger"
  ],
  'Matthew': [
    "The Genealogy of Jesus", "The Visit of the Magi", "The Proclamation of John the Baptist", "The Temptation of Jesus",
    "The Sermon on the Mount: The Beatitudes", "The Sermon on the Mount: Concerning Almsgiving and Prayer", "The Sermon on the Mount: Judging Others",
    "Jesus Heals a Leper", "Jesus Heals a Paralytic", "The Mission of the Twelve", "Jesus and John the Baptist",
    "The Question about the Sabbath", "The Parable of the Sower", "The Death of John the Baptist", "The Tradition of the Elders",
    "The Demand for a Sign", "The Transfiguration", "The Greatest in the Kingdom", "Teaching about Divorce",
    "The Parable of the Workers in the Vineyard", "Jesus' Triumphal Entry into Jerusalem", "The Parable of the Wedding Feast",
    "Woes to the Scribes and Pharisees", "The Olivet Discourse: Signs of the End of the Age", "The Parable of the Ten Virgins",
    "The Plot to Kill Jesus", "The Crucifixion of Jesus", "The Resurrection"
  ],
  'Mark': [
    "The Proclamation of John the Baptist", "Jesus Heals a Paralytic", "Jesus and the Sabbath", "The Parable of the Sower",
    "Jesus Heals a Woman and Jairus's Daughter", "The Rejection of Jesus at Nazareth", "The Feeding of the Five Thousand",
    "The Feeding of the Four Thousand", "The Transfiguration", "Teaching about Divorce", "The Triumphal Entry",
    "The Parable of the Tenants", "The Olivet Discourse", "The Anointing at Bethany", "The Crucifixion", "The Resurrection"
  ],
  'Luke': [
    "The Birth of John the Baptist Foretold", "The Birth of Jesus", "The Proclamation of John the Baptist", "The Temptation of Jesus",
    "The Call of the First Disciples", "The Sermon on the Plain", "The Faith of the Centurion", "The Parable of the Sower",
    "The Feeding of the Five Thousand", "The Mission of the Seventy-Two", "The Lord's Prayer", "A Warning Against Hypocrisy",
    "The Parable of the Barren Fig Tree", "The Parable of the Great Banquet", "The Parable of the Lost Son",
    "The Parable of the Shrewd Manager", "Teachings on Forgiveness and Faith", "The Parable of the Pharisee and the Tax Collector",
    "Zacchaeus the Tax Collector", "The Parable of the Tenants", "The Olivet Discourse", "The Last Supper", "The Crucifixion", "The Resurrection"
  ],
  'John': [
    "The Word Became Flesh", "The Wedding at Cana", "Jesus and Nicodemus", "The Woman at the Well",
    "The Healing at the Pool of Bethesda", "The Feeding of the Five Thousand", "Jesus at the Festival of Tabernacles",
    "The Woman Caught in Adultery", "Jesus Heals a Man Born Blind", "The Good Shepherd", "The Death of Lazarus",
    "The Triumphal Entry", "Jesus Washes the Disciples' Feet", "The Way, the Truth, and the Life", "The Vine and the Branches",
    "The Work of the Holy Spirit", "Jesus' High Priestly Prayer", "The Arrest of Jesus", "The Crucifixion", "The Resurrection",
    "Jesus Appears to the Disciples by the Sea"
  ],
  'Acts': [
    "The Promise of the Holy Spirit", "The Day of Pentecost", "Peter Heals a Lame Beggar", "Peter and John Before the Sanhedrin",
    "Ananias and Sapphira", "The Choosing of the Seven", "Stephen's Speech to the Sanhedrin", "Philip in Samaria",
    "The Conversion of Saul", "Peter's Vision", "The Church in Antioch", "Peter's Miraculous Escape from Prison",
    "Paul's First Missionary Journey", "Paul and Barnabas at Lystra", "The Council at Jerusalem", "Paul's Second Missionary Journey",
    "Paul in Athens", "Paul in Corinth", "Paul in Ephesus", "Paul's Farewell to the Ephesian Elders", "Paul's Journey to Jerusalem",
    "Paul's Defense Before the People", "Paul Before the Sanhedrin", "Paul Before Felix", "Paul Before Festus", "Paul Before Agrippa",
    "Paul's Shipwreck", "Paul in Rome"
  ],
  'Romans': [
    "The Righteousness of God", "God's Righteous Judgment", "Justification by Faith", "Abraham's Faith",
    "Peace and Hope", "Dead to Sin, Alive in Christ", "The Law and Sin", "Life Through the Spirit",
    "God's Sovereign Choice", "The Word of Faith", "The Remnant of Israel", "Living Sacrifices",
    "Submission to Governing Authorities", "The Weak and the Strong", "Paul's Plan to Visit Rome", "Personal Greetings"
  ],
  '1 Corinthians': [
    "Divisions in the Church", "The Wisdom of God", "On Divisions in the Church", "The Ministry of the Apostles",
    "Dealing with Immorality", "Lawsuits Among Believers", "Principles for Marriage", "Food Sacrificed to Idols",
    "The Rights of an Apostle", "Warnings from Israel's History", "Head Coverings and the Lord's Supper", "Spiritual Gifts",
    "The Way of Love", "Gifts of Prophecy and Tongues", "The Resurrection of Christ", "The Collection for the Lord's People"
  ],
  '2 Corinthians': [
    "The God of All Comfort", "Forgiveness for the Sinner", "The New Covenant", "Treasures in Jars of Clay",
    "Our Heavenly Dwelling", "The Ministry of Reconciliation", "Paul's Joy", "Generosity in Giving",
    "The Cheerful Giver", "Paul's Defense of His Ministry", "Paul and the False Apostles", "Paul's Vision and Thorn", "Final Warnings"
  ],
  'Galatians': [
    "No Other Gospel", "Paul's Confrontation with Peter", "Justification by Faith", "Sons and Heirs",
    "Freedom in Christ", "Doing Good to All"
  ],
  'Ephesians': [
    "Spiritual Blessings in Christ", "Made Alive in Christ", "The Mystery of the Gospel Revealed",
    "Unity in the Body of Christ", "Living as Children of Light", "The Armor of God"
  ],
  'Philippians': [
    "Thanksgiving and Prayer", "Humility and the Example of Christ", "No Confidence in the Flesh", "Rejoicing in the Lord"
  ],
  'Colossians': [
    "The Supremacy of Christ",
    "The New Life in Christ",
    "Rules for the Christian Life",
    "Final Instructions"
  ],
  '1 Thessalonians': [
    "The Faith of the Thessalonians",
    "The Ministry of Paul",
    "Exhortations to Holiness",
    "The Coming of the Lord",
    "Final Exhortations"
  ],
  '2 Thessalonians': [
    "The Justice of God",
    "The Man of Lawlessness",
    "Final Exhortations"
  ],
  '1 Timothy': [
    "False Teachers",
    "Instructions for Worship",
    "Qualifications for Leaders",
    "Pastoral Advice",
    "Christian Duties",
    "The Good Fight of Faith"
  ],
  '2 Timothy': [
    "Perseverance in Ministry",
    "The Approved Worker",
    "The Last Days",
    "The Final Mission"
  ],
  'Titus': [
    "Organization of the Church",
    "Christian Living",
    "The Grace that Transforms"
  ],
  'Philemon': [
    "Appeal for Onesimus"
  ],
  'Hebrews': [
    "Christ is Superior to Angels",
    "The Superiority of Christ",
    "Christ is Superior to Moses",
    "The Promised Rest",
    "The Priesthood of Christ",
    "Warning Against Apostasy",
    "The Priesthood According to Melchizedek",
    "The New Covenant",
    "The Perfect Sacrifice",
    "Persevering Faith",
    "The Hall of Faith",
    "The Discipline of the Lord",
    "Final Exhortations"
  ],
  'James': [
    "Trials and Faith",
    "Faith Without Works is Dead",
    "The Power of the Tongue",
    "Warnings Against Worldliness",
    "The Prayer of Faith"
  ],
  '1 Peter': [
    "The Living Hope",
    "Christian Living",
    "Suffering for Christ",
    "Judgment Begins with the House of God",
    "Exhortations to Leaders and the Flock"
  ],
  '2 Peter': [
    "Spiritual Growth",
    "False Teachers",
    "The Day of the Lord"
  ],
  '1 John': [
    "The Word of Life",
    "Walking in the Light",
    "Children of God",
    "The Spirit of the Antichrist",
    "The Certainty of Eternal Life"
  ],
  '2 John': [
    "Truth and Love"
  ],
  '3 John': [
    "The Testimony of Gaius"
  ],
  'Jude': [
    "Exhortation Against False Teachers"
  ],
  'Revelation': [
    "The Revelation of Jesus Christ",
    "The Message to the Church in Ephesus",
    "The Messages to the Churches",
    "The Throne in Heaven",
    "The Sealed Book",
    "The First Six Seals",
    "The 144,000",
    "The Seventh Seal and the Trumpets",
    "The Fifth and Sixth Trumpets",
    "The Angel and the Little Book",
    "The Two Witnesses",
    "The Woman and the Dragon",
    "The Two Beasts",
    "The Lamb and the Redeemed",
    "The Bowls of Wrath",
    "The Final Judgment",
    "The Fall of Babylon",
    "The Destruction of Babylon",
    "The Wedding of the Lamb",
    "The Final Judgment",
    "New Heaven and New Earth",
    "The Coming of Jesus"
  ]
};