function Contacts() {
    return (
        <div>
            <h2>Contacts</h2>

            <table border="1" width="100%" style={{ marginTop: "20px" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Service</th>
                        <th>Budget</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Demo</td>
                        <td>demo@mail.com</td>
                        <td>Web</td>
                        <td>$1000</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Contacts;