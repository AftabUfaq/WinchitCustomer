const [countrys, setcountrys] = useState([
    {
      value: 1,
      label: 'Panjab',
    },
    {
      value: 2,
      label: 'KPK',
    },
    {
        value: 6,
        label: 'Baloch',
      },
    {
      value: 3,
      label: 'Sindh',
    },
    {
      value: 4,
      label: 'Gilgithh',
    },
    {
      value: 5,
      label: 'Kashmir',
    },
]);
const [selected_country, setSelectcountry] = useState("")
const [country_modal_visible, setcountrysModalVisibe] = useState(false)
const [country_name, setcountryName] = useState("")

<DropdownAddComponent 
                            show_add_button={true}
                            width={wp(84)}
                            AddButtonPress={() => alert("company")}
                            placeholder={"country"}
                            items={countrys}
                            setItems={setcountrys}
                            selectedItems={selected_country}
                            setSelectItems={setSelectcountry}
                            isVisible={country_modal_visible}
                            setIsVisible={setcountrysModalVisibe}
                            company_name={country_name}
                            setCompanyName={setcountryName}
                        />