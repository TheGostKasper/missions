# Getting Started with App

- Listing Missions Feed where the ambassador can see the missions available for him.
- Support translation for English and Spanish
- Infinite Scroll loader 

<br/>

# Published Repo
  You can access a published repo at  [dev-missions](https://dev-missions.netlify.app/) 

<br/>

## Run Locally 

- Yarn && yarn start

# Documentation

- ## Shared Components :
    - ## `LoadingError`

         Used to controls fetching data and its status either ``Error`` , ``Show Loader`` or ``Passing data up to Childern``

        ## Props  

        | Input | Description | Default Value |
        | --- | --- | --- |
        | `query` |  gqlQuery |  |
        | `variables` | variable object in use of gqlQuery |  |
        | `isInfinit` | control the displaying of children component when rendered | true |
       
        ## Usage
        ```jsx

        // full example => Missions.tsx
        <LoadingError query={GQLQueries.GET_FEED} variables={variable}>
            {({ value }: { value: IFeesReponse }) => (

                // Children component 
            )}
        </LoadingError>
        ```

    - ## `UseScrollLoader` 


        | Input | Description | Default Value |
        | --- | --- | --- |
        | `hasNext` |  prop that tell if we hook will call new fetch |  |
        | `onNextPageChange` | function responses for querying next page |  |
        
       
        ## Usage
        ```jsx
        // add lastElementRef to component in which will call onNextPageChange on onNextPageChange the element in the page 

        const lastElementRef = UseScrollLoader({ hasNext, onNextPageChange });
        ...
        // For example => mission-list.tsx 

        ```

    - ## `LangContext` 

        | Input | Description | Default Value |
        | --- | --- | --- |
        | `lang` |  define the requested language |  |
        
       
        ## Usage
        ```jsx

        // It returns { useLangContext, LangContextProvider } 

        // Access Provider 
        <LangContextProvider lang={lang}>
        // Children component 
        </LangContextProvider>


        // Access Context as it returns tha current value of the translateObj
        const translateObj = useLangContext();


        ```


- Shared Services :
    - ## `gqlQueries` : 

        Class wraps Queries that will be used and accessed 

        | Fn | Description | Variables |
        | --- | --- | --- |
        | `GET_FEED` |  query used to fetch mission feed | ``$limit: Int!, $offset: Int!`` |
        
       <hr/><br/>

    - ## `utils` 
        Class includes utilizes functions that can be used across the system 

        | Fn | Description | Input |
        | --- | --- | --- |
        | `getDateFormate` |  returns date as string formatted into ``26 March 2022`` | ``String Date`` |
        | `groupItemsByDate` |  returns Mission items grouped by Date | ``Array<IMission>`` |
        | `addOrUpdateMetaTag` |  It adds new meta tag if not found otherwise it updates  | ``prop: string, val: string`` |
        | `updateMissionMetaTags` |  Updates social tags "client-side" to the latest value  | ``mission: IMission or undefined`` |
        | `addSocialMeta` | Updates meta tag both ``twitter`` and ``og`` to the value passed to id   | ``prop: string, value: string`` |


    - `translate` : Class defines resources of supported language and any related functions to use in translation

