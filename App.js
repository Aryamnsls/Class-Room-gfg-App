import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
  Linking,
  Switch,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ClassroomApp = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'Mathematics',
      teacher: 'Mr. Smith',
      schedule: 'Mon, Wed, Fri 10:00 AM',
      icon: 'book',
    },
    {
      id: 2,
      name: 'Science',
      teacher: 'Ms. Johnson',
      schedule: 'Tue, Thu 2:00 PM',
      icon: 'flask',
    },
    {
      id: 3,
      name: 'History',
      teacher: 'Mr. Davis',
      schedule: 'Wed, Wed 1:00 PM',
      icon: 'globe',
    },
    {
      id: 4,
      name: 'Data-Structure C++',
      teacher: 'Sandeep Jain',
      schedule: 'Thu, Thu 12:00 PM',
      icon: 'globe',
    },
    {
      id: 5,
      name: 'Data-Structure Java',
      teacher: 'Anuj Kumar Sharma',
      schedule: 'Fri, Fri 2:00 PM',
      icon: 'book',
    },
  ]);

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      content: 'New assignment uploaded for Mathematics',
    },
    {
      id: 2,
      content: 'Science class canceled tomorrow',
    },
    {
      id: 3,
      content: 'History quiz scheduled for next week',
    },
  ]);

  //   const [profile, setProfile] = useState({
  //     id:1,
  //     name: 'Your Name : Aryaman M Singha',
  //     bio: 'Student at Chandigarh University',
  //     email: 'aryamansingha60@gmail.com',

  // });

  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'Aryaman M Singha',
      bio: 'Student at Chandigarh University',
      email: 'aryamansingha60@gmail.com',
    },

    {
      id: 2,
      name: 'Anuska Bora',
      bio: 'Student at Chandigarh University',
      email: 'anuskabora@gmail.com',
    },
  ]);

  const [activeScreen, setActiveScreen] = useState('home');

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Apply dark mode styles
    if (isDarkMode) {
      // Apply dark mode styles here
    } else {
      // Apply light mode styles here
    }
  }, [isDarkMode]);

  const handleViewTimetable = () => {
    setActiveScreen('timetable');
  };

  const handleViewStudyMaterial = () => {
    setActiveScreen('studyMaterial');
  };

  const handleViewNotifications = () => {
    setActiveScreen('notifications');
  };

  const handleViewProfile = () => {
    setActiveScreen('profiles');
  };

  const handleBackToHome = () => {
    setActiveScreen('home');
  };

  const renderScreen = () => {
    switch (activeScreen) {
      case 'home':
        return (
          <ScrollView>
            <View style={styles.cryptoList}>
              <Text style={styles.sectionTitle}>Courses</Text>
              <FlatList
                data={courses}
                keyExtractor={(item) => item.id.toString()}
                renderItem={renderItem}
              />
            </View>
          </ScrollView>
        );
      case 'timetable':
        return <TimetableScreen onBackToHome={handleBackToHome} />;
      case 'studyMaterial':
        return <StudyMaterialScreen onBackToHome={handleBackToHome} />;
      case 'notifications':
        return (
          <NotificationsScreen
            notifications={notifications}
            onBackToHome={handleBackToHome}
          />
        );
      case 'profiles':
        return (
          <ProfileScreen profiles={profiles} onBackToHome={handleBackToHome} />
        );
      default:
        return null;
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.cryptoItem}>
      <Icon name={item.icon} size={30} color="#3498db" />
      <View>
        <Text style={styles.cryptoName}>{item.name}</Text>
        <Text style={styles.cryptoBalance}>
          Teacher: {item.teacher}
          {'\n'}
          Schedule: {item.schedule}
        </Text>
      </View>
    </View>
  );

  return (
    <View
      style={
        isDarkMode ? [styles.container, styles.darkContainer] : styles.container
      }>
      <View style={styles.profileSection}>
        <TouchableOpacity>
          <Icon name="user-circle" size={30} color="#3498db" />
        </TouchableOpacity>
        <Text style={styles.profileName}>{profiles.name}</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>

      <View style={styles.banner}>
        <Image
          source={require('./gfg12.jpg')}
          style={{ width: 50, height: 50 }}
        />
        <Text style={styles.bannerText}>Classroom App</Text>
        <Text style={styles.bannerText}>By geeksforgeeks</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleViewTimetable()}>
          <Icon name="calendar" size={20} color="#3498db" />
          <Text>View Timetable</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleViewStudyMaterial()}>
          <Icon name="book" size={20} color="#3498db" />
          <Text>Study Material</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleViewNotifications()}>
          <Icon name="bell" size={20} color="#3498db" />
          <Text>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleViewProfile()}>
          <Icon name="user" size={20} color="#3498db" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
      {renderScreen()}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleViewTimetable()}>
          <Icon
            name="calendar"
            size={20}
            color={activeScreen === 'home' ? '#3498db' : '#333'}
          />
          <Text
            style={{
              color: activeScreen === 'home' ? '#3498db' : '#333',
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleViewNotifications()}>
          <Icon
            name="bell"
            size={20}
            color={activeScreen === 'notifications' ? '#3498db' : '#333'}
          />
          <Text
            style={{
              color: activeScreen === 'notifications' ? '#3498db' : '#333',
            }}>
            Notifications
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => handleViewProfile()}>
          <Icon
            name="user"
            size={20}
            color={activeScreen === 'profiles' ? '#3498db' : '#333'}
          />
          <Text
            style={{
              color: activeScreen === 'profiles' ? '#3498db' : '#333',
            }}>
            profiles
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const TimetableScreen = ({ onBackToHome }) => {
  const timetableData = [
    {
      time: '9:00 AM - 10:30 AM',
      course: 'Mathematics',
    },
    {
      time: '11:00 AM - 12:30 PM',
      course: 'Science',
    },
    {
      time: '1:00 PM - 2:30 PM',
      course: 'History',
    },
    {
      time: '3:00 PM - 5:30 PM',
      course: 'Data-Structure C++',
    },
  ];

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <Text style={styles.sectionTitle}>Timetable</Text>
        <FlatList
          data={timetableData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.timetableItem}>
              <Text style={styles.timetableTime}>{item.time}</Text>
              <Text style={styles.timetableCourse}>{item.course}</Text>
            </View>
          )}
        />
        <TouchableOpacity style={styles.backButton} onPress={onBackToHome}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const StudyMaterialScreen = ({ onBackToHome }) => {
  const materialData = [
    {
      title: 'Introduction to Mathematics',
      link: 'https://www.geeksforgeeks.org/maths/',
    },
    {
      title: 'Chemistry Basics',
      link: 'https://www.geeksforgeeks.org/chemistry/',
    },
    {
      title: 'World History Overview',
      link: 'https://www.geeksforgeeks.org/history-notes-for-upsc-exam/',
    },
    {
      title: 'Data-Structure C++',
      link: 'https://www.geeksforgeeks.org/data-structures-algorithms-using-c-plus-plus/',
    },
  ];

  const handleOpenLink = (link) => {
    Linking.openURL(link);
  };

  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <Text style={styles.sectionTitle}>Study Material</Text>
        <FlatList
          data={materialData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.studyMaterialItem}
              onPress={() => handleOpenLink(item.link)}>
              <Text style={styles.studyMaterialTitle}>{item.title}</Text>
              <Text style={styles.studyMaterialLink}>{item.link}</Text>
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity style={styles.backButton} onPress={onBackToHome}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
const NotificationsScreen = ({ notifications, onBackToHome }) => {
  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <Text style={styles.sectionTitle}>Notifications</Text>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.notificationItem}>
              <Icon name="bell" size={20} color="#3498db" />
              <Text>{item.content}</Text>
            </View>
          )}
        />
        <TouchableOpacity style={styles.backButton} onPress={onBackToHome}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const ProfileScreen = ({ profiles, onBackToHome }) => {
  return (
    <ScrollView>
      <View style={styles.screenContainer}>
        <Text style={styles.sectionTitle}>Profiles</Text>
        {profiles.map((profile) => (
          <View
            key={profile.id}
            style={[styles.profileItem, { marginBottom: 16 }]}>
            <Text>Name: {profile.name}</Text>
            <Text>Bio: {profile.bio}</Text>
            <Text>Email: {profile.email}</Text>
          </View>
        ))}
        <TouchableOpacity style={styles.backButton} onPress={onBackToHome}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  darkContainer: {
    backgroundColor: '#333', // Dark mode background color
  },
  profileSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  profileName: {
    fontSize: 18,
  },
  banner: {
    backgroundColor: '#3498db',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    marginTop: 10,
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
  },
  cryptoList: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cryptoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  cryptoName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  cryptoBalance: {
    fontSize: 14,
    color: '#555',
    marginLeft: 12,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
  },
  navItem: {
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
    padding: 16,
  },
  timetableItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  timetableTime: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  timetableCourse: {
    fontSize: 14,
    color: '#555',
    marginLeft: 12,
  },
  studyMaterialItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  studyMaterialTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  studyMaterialLink: {
    fontSize: 14,
    color: '#3498db',
  },
  backButton: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    color: '#333',
  },

  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
});

export default ClassroomApp;
