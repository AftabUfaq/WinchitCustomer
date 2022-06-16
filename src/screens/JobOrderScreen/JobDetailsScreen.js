import React, { useState } from 'react';
import {FlatList,StatusBar,SafeAreaView,ScrollView, StyleSheet, TouchableOpacity,Text,View} from 'react-native';
import { commonStyles, textStyles} from '../../styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import RenderHtml from 'react-native-render-html';
import {decode} from 'html-entities';
import { source} from './html';
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from  'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import CustomHeader from '../../components/CustomHeader';
import { colors, fonts } from '../../constants/theme';
import { scale, verticalScale } from 'react-native-size-matters';
import JobCard from './JobCard'
import { AppScreenWidth, width } from '../../constants/sacling';
import Menu, {
    renderers,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
  const {ContextMenu} = renderers;   
    const JobDetailsScreen = ({navigation}) => {
        const user = {
               
                "jobTitle": "Full Stack Developer", 
                "company_name": "Vertelligence", 
                "name": "Lisa Kunde", 
                "location":"Islamabad, Pakistan",
                "status": "Active Canddidate"
            }
        const [tabs, setTabs]  = useState([
            {id: 1, tab_name: 'Activities', selected: true},
            {id: 2, tab_name: 'Description', selected: false},
            {id: 3, tab_name: 'Notes', selected: false},
            {id: 4, tab_name: 'Skills', selected: true},
            {id: 5, tab_name: 'Tags', selected: false},
            {id: 6, tab_name: 'Pipline', selected: false},
            {id: 7, tab_name: 'Internal Submission', selected: true},
            {id: 8, tab_name: 'Contact Submission', selected: false},
            {id: 9, tab_name: 'Interviews', selected: false},
            {id: 10, tab_name: 'Placement', selected: true},
            {id: 11, tab_name: 'Matching Candidates', selected: false},
            {id: 12, tab_name: 'External Candidates', selected: false},
            {id: 13, tab_name: 'Job Applications', selected: true},
            {id: 14, tab_name: 'Job Posting', selected: false},
            
          ])
        const [selected_tab, setSelectTab] =  useState({id: 1, tab_name: 'Activities', selected: true})
        const [showmenu, setShowMenu] = useState(false);
        const TopListItems = ({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                    let temp = tabs;
                    temp.map((tempItem, index) => {
                        if (tempItem.id === item.id) {
                            setSelectTab({...tempItem, selected:true})
                        }
                    });
                }}
      
                style={{
                    ...styles.tab_view,
                    backgroundColor:
                        selected_tab.id == item.id 
                        ?
                            colors.dark_primary_color
                        :
                            colors.white,
                }}>
                <Text
                    style={{
                        includeFontPadding:false,
                      ...styles.tabText, 
                        color:
                        selected_tab.id == item.id 
                        ?
                        colors.white
                        :
                        "#000"
                    }}>
                  {item.tab_name}
                </Text>
              </TouchableOpacity>
            );
        };
        const details = [
            {"key":"Company Job Id", "name":"J-OOJPCC"}, {"key":"J-OOJPCC", "name":"#33139"},
            {"key":"Job Type", "name":"Contract"}, {"key":"Pay Type", "name":"Hourly"},
            {"key":"Pay/Salary", "name":"$ 2000"}, {"key":"Bill Rate", "name":"$ 84"}, 
            {"key":"Job Priority", "name":"High"}, {"key":"Duration", "name":"2 Years"},
            {"key":"Assigned Recruiter", "name":"ajavaid"}, {"key":"Job Owner", "name":"Job Owner"},
            {"key":"EEO Category", "name":"Professionals"}, {"key":"Industry", "name":"IT"}, 
            {"key":"Education", "name":"Masters"}, {"key":"Travel Preference", "name":"Once a Week"}, 
        ]
        return (
            <SafeAreaView style={commonStyles.SafeAreaView} >
                <StatusBar barStyle={"light-content"} />
                <View style={commonStyles.container} >
                    <CustomHeader 
                        show_backButton={true}
                        isdrawer={false}
                        onPress={() => navigation.goBack()}
                        title={"Job Details"}
                    />
                    <JobCard 
                        item={user}
                    />
                     <View  style={styles.tabView}>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={tabs}
                            renderItem={TopListItems}
                            keyExtractor={(item, index) => index}
                        />
                    </View>
                    {
                        [1,4,5,6,7,8,9,10,11,12,13].includes(selected_tab.id) && 
                        <ScrollView showsVerticalScrollIndicator={false} >
                           
                                {
                                    details.map((item,index) => {
                                        return(
                                            <View key={`${index}`} style={styles.job_details_row}>
                                                <View style={{flex:.4}}>
                                                    <Text style={styles.menuText}>{item.key}</Text>
                                                </View>
                                                <View style={{flex:.05, height:1, backgroundColor:"rgba(0,0,0,.3)"}}></View>
                                                <View style={{flex:.4}}>
                                                    <Text style={styles.menuText}>{item.name}</Text>
                                                </View>
                                            </View>
                                        )
                                    })
                                }
                            
                        </ScrollView>
                    }
                    {
                        selected_tab.id === 2 && 
                            <ScrollView>  
                                 
                            </ScrollView>
                    }

                    {
                        selected_tab.id === 3 && 
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <View style={{width:AppScreenWidth, alignSelf:"center", marginVertical:scale(10) }}>
                            <RenderHtml
                                    contentWidth={AppScreenWidth}
                                    source={{html:decode(source)}}
                                />
                            </View>
                        </ScrollView>
                    }
                    <View style={styles.Row}>
                        <TouchableOpacity>
                            <Feather 
                                name={"edit"}
                                color={"#fff"}
                                size={scale(22)}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Entypo 
                                size={scale(20)} 
                                name={"attachment"} 
                                color={"#fff"}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Feather 
                                name={"share-2"}
                                color={"#fff"}
                                size={scale(22)}
                            />
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <FontAwesome 
                                name={"list-ul"}
                                color={"#fff"}
                                size={scale(22)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <FontAwesome 
                                name={"users"}
                                color={"#fff"}
                                size={scale(20)}
                            />
                        </TouchableOpacity>

                      

                        <TouchableOpacity>
                            <Ionicons 
                                name={"ios-copy"}
                                color={"#fff"}
                                size={scale(22)}
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AntDesign 
                                name={"sound"}
                                color={"#fff"}
                                size={scale(22)}
                            />
                        </TouchableOpacity>

                        
                        <TouchableOpacity onPress={() => setShowMenu(!showmenu)}>
                            <Menu
                                onBackdropPress={() => setShowMenu(!showmenu)}
                                renderer={ContextMenu}>
                                <MenuTrigger>
                                <Entypo 
                                    name={"dots-three-vertical"}
                                    color={"#fff"}
                                    size={scale(22)}
                                />
                                </MenuTrigger>
                                <MenuOptions customStyles={optionsStyles}>
                                    <MenuOption
                                        customStyles={optionStyles}
                                        value={'All'}
                                        onSelect={() => alert('All')}
                                    >
                                        <View style={styles.menu_row_icons} >
                                            <AntDesign 
                                                name={"star"}
                                                color={colors.dark_primary_color}
                                                size={scale(22)}
                                            />
                                            <Text style={styles.menuText}>Score Card</Text>
                                        </View>
                                    </MenuOption>

                                     <MenuOption
                                        customStyles={optionStyles}
                                        value={'All'}
                                        onSelect={() => alert('All')}
                                    >
                                        <View style={styles.menu_row_icons} >
                                            <Ionicons 
                                                name={"notifications"}
                                                color={colors.dark_primary_color}
                                                size={scale(22)}
                                            />
                                            <Text style={styles.menuText}>Reminder</Text>
                                        </View>
                                    </MenuOption>
                                    <MenuOption
                                        customStyles={optionStyles}
                                        value={'All'}
                                        onSelect={() => alert('All')}
                                    >
                                        <View style={styles.menu_row_icons} >
                                            <AntDesign 
                                                name={"pushpin"}
                                                color={colors.dark_primary_color}
                                                size={scale(22)}
                                            />
                                            <Text style={styles.menuText}>Pin It</Text>
                                        </View>
                                    </MenuOption>
                                    <MenuOption
                                        customStyles={optionStyles}
                                        value={'All'}
                                        onSelect={() => alert('All')}
                                    >
                                        <View style={styles.menu_row_icons} >
                                            <AntDesign 
                                                name={"tags"}
                                                color={colors.dark_primary_color}
                                                size={scale(22)}
                                            />
                                            <Text style={styles.menuText}>Assign Tag</Text>
                                        </View>
                                    </MenuOption>
                                    <MenuOption
                                        customStyles={optionStyles}
                                        value={'All'}
                                        onSelect={() => alert('All')}
                                    >
                                        <View style={styles.menu_row_icons} >
                                            <FontAwesome 
                                                name={"video-camera"}
                                                color={colors.dark_primary_color}
                                                size={scale(22)}
                                            />
                                            <Text style={styles.menuText}>Video Application Qiestions</Text>
                                        </View>
                                    </MenuOption>
                                    <MenuOption
                                        customStyles={optionStyles}
                                        value={'All'}
                                        onSelect={() => alert('All')}
                                    >
                                        <View style={styles.menu_row_icons} >
                                            <FontAwesome 
                                                name={"trash"}
                                                color={colors.dark_primary_color}
                                                size={scale(22)}
                                            />
                                            <Text style={styles.menuText}>Delete</Text>
                                        </View>
                                    </MenuOption>

                                </MenuOptions>
                            </Menu>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            
        );
    };


export default JobDetailsScreen;

const styles = StyleSheet.create({
    menu_row_icons:{
        flexDirection:"row",
        alignItems:"center"
    },
    job_details_row:{
        flexDirection:"row",
       justifyContent:"space-between",
       width:AppScreenWidth,
       borderBottomWidth:.5,
       paddingVertical:scale(3),
       alignItems:"center",
       borderBottomColor:"rgba(0,0,0,.1)"
    },
    menuText:{
        ...textStyles.Label,
        marginLeft:scale(10)
    },
    tab_view:{
        borderRadius:scale(5),
        paddingHorizontal:scale(10),
        paddingVertical:scale(3),
        marginVertical:scale(5),
        marginHorizontal: scale(3),
        borderBottomColor: "#000"
    },
    tabView:{
        justifyContent: 'center',
        backgroundColor:colors.white,
        height:verticalScale(38),
        borderBottomWidth:1.5,
        borderTopColor:"rgba(0,0,0,.4)",
        borderTopWidth:1.5,
        borderBottomColor:"rgba(0,0,0,.4)",
        width:AppScreenWidth,
        paddingVertical: verticalScale(0),
        marginTop:scale(5)
    },
    tabText:{
        flex: 1,
        textAlign: 'center',
        fontFamily:fonts.Medium,
        paddingVertical: verticalScale(2),
        paddingHorizontal: scale(8),
        fontSize: scale(12),
    },
    Row:{
        backgroundColor:colors.dark_primary_color,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"center",
        position:"absolute",
        bottom:0,
        paddingVertical:scale(10),
        width:width
    }
})

const optionsStyles = {
    optionsContainer: {
      backgroundColor: '#fff',
      padding: 5,
    },
    optionsWrapper: {
      backgroundColor: '#fff',
    },
    optionWrapper: {
      backgroundColor: '#fff',
      margin: 5,
    },
    optionText: {
      color: '#fff',
    },
  };
  
  const optionStyles = {
    optionTouchable: {
      underlayColor: '#fff',
      activeOpacity: 40,
      flexDirection:"row"
    },
    optionWrapper: {
      backgroundColor: '#fff',
      margin: 5,
    },
  };


