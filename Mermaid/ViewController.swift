//
//  ViewController.swift
//  Mermaid
//
//  Created by Zak Raicik on 12/1/20.
//

import UIKit
import MessageUI

let twilioSID = SID
let twilioSecret = SECRET
let fromNumber = NUMBER1
let toNumber = NUMBER2

class ViewController: UIViewController, MFMessageComposeViewControllerDelegate {
    
    func messageComposeViewController(_ controller: MFMessageComposeViewController, didFinishWith result: MessageComposeResult) {
    }

    override func viewDidLoad() {
        print("Sending text.")
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    func sendText(msg:String) {
        
        let request = NSMutableURLRequest(url: NSURL(string:"https://\(twilioSID):\(twilioSecret)@api.twilio.com/2010-04-01/Accounts/\(twilioSID)/SMS/Messages")! as URL)
        
        request.httpMethod = "POST"
        
        request.httpBody = "From=\(fromNumber)&To=\(toNumber)&Body=\(msg)".data(using: String.Encoding.utf8)
        
        URLSession.shared.dataTask(with: request as URLRequest, completionHandler: { (data, response, error) in
            
                print("Finished")
            
            if let data = data, let responseDetails = NSString(data: data, encoding: String.Encoding.utf8.rawValue) {
                    // Success
                    print("Response: \(responseDetails)")
                } else {
                    // Failure
                    print("Error: \(String(describing: error))")
                }
            }).resume()
        
    }
    
    @IBAction func goToHome(sender: AnyObject) {

        let alert = UIAlertController(title: "You did it.", message: "A message has been sent to the shell phone.", preferredStyle: .alert)
        
        alert.addAction(UIAlertAction(title: NSLocalizedString("OK", comment: "Default action"), style: .default, handler: { _ in
        NSLog("The \"OK\" alert occured.")
        }))
        
        self.present(alert, animated: true, completion: nil)

    }
    
    @IBAction func foodButton(_ sender: Any) {
        
        let msg = "Mermaid needs food."
        
        sendText(msg: msg)
    }
    
    @IBAction func laughsButton(_ sender: Any) {
        
        let msg = "Mermaid needs laughs."
        
        sendText(msg: msg)
    }
    
    @IBAction func dancePartyButton(_ sender: Any) {
        
        let msg = "Mermaid needs a dance party."
        
        sendText(msg: msg)
        
    }
    
    @IBAction func attentionButton(_ sender: Any) {
        
        let msg = "Mermaid needs attention."
        
        sendText(msg: msg)
        
    }
    
    @IBAction func sexyTimeButton(_ sender: Any) {
        
        let msg = "Mermaid needs sexy time."
        
        sendText(msg: msg)
    }
    
    @IBAction func aloneTimeButton(_ sender: Any) {
        
        let msg = "Mermaid needs alone time."
        
        sendText(msg: msg)
    }
    
}
